/**
 * Content admin — shared by the Vercel functions in api/admin/* and the Vite dev
 * middleware in vite.config.js. Framework-agnostic: every handler takes plain values
 * and returns { status, body }.
 *
 * Environment:
 *   ADMIN_EMAIL, ADMIN_PASSWORD   login credentials (required)
 *   ADMIN_SESSION_SECRET          signs session tokens (recommended)
 *   GITHUB_TOKEN                  production only — contents read/write on the repo
 *   GITHUB_REPO, GITHUB_BRANCH    default Zebrold/ZebroldGroups, main
 */
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

export const CONTENT_PATH = 'src/content/siteContent.json';

const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
const MAX_CONTENT_BYTES = 1024 * 1024;

const LIST_KEYS = ['events', 'news', 'jobs', 'documents', 'calendar', 'metrics', 'segments', 'regions'];

const UPLOAD_KINDS = {
  image: { dir: 'public/uploads', exts: ['jpg', 'jpeg', 'png', 'webp', 'avif'] },
  pdf: { dir: 'public/docs', exts: ['pdf'] },
};

const json = (status, body) => ({ status, body });

/* ══ Auth ══ */

function credentials(env) {
  const email = (env.ADMIN_EMAIL || '').trim().toLowerCase();
  const password = env.ADMIN_PASSWORD || '';
  if (!email || !password) return null;
  const key = crypto
    .createHash('sha256')
    .update(`${env.ADMIN_SESSION_SECRET || ''}\0${email}\0${password}`)
    .digest();
  return { email, password, key };
}

function sameString(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function sign(key, payload) {
  return crypto.createHmac('sha256', key).update(payload).digest('base64url');
}

function isAuthorised(headers, env) {
  const creds = credentials(env);
  const header = headers.authorization || headers.Authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const [expires, signature] = token.split('.');
  if (!creds || !expires || !signature) return false;
  if (!(Number(expires) > Date.now())) return false;
  return sameString(signature, sign(creds.key, expires));
}

export async function handleLogin(body, env) {
  const creds = credentials(env);
  if (!creds) {
    return json(500, { error: 'Admin login is not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD.' });
  }

  const emailOk = sameString((body?.email || '').trim().toLowerCase(), creds.email);
  const passwordOk = sameString(body?.password || '', creds.password);
  if (!emailOk || !passwordOk) {
    // Slow down guessing a little.
    await new Promise((resolve) => setTimeout(resolve, 600));
    return json(401, { error: 'Incorrect username or password.' });
  }

  const expires = String(Date.now() + SESSION_TTL_MS);
  return json(200, { token: `${expires}.${sign(creds.key, expires)}`, expires: Number(expires) });
}

/* ══ Content ══ */

function validateContent(content) {
  if (!content || typeof content !== 'object' || Array.isArray(content)) return 'Content must be an object.';
  for (const key of LIST_KEYS) {
    if (!Array.isArray(content[key])) return `"${key}" must be a list.`;
  }

  const ids = new Set();
  for (const item of content.news) {
    if (!item?.id || !/^[a-z0-9-]+$/.test(item.id)) return `Dispatch "${item?.title?.en || '?'}" needs a URL id (a-z, 0-9, -).`;
    if (ids.has(item.id)) return `Two dispatches share the URL id "${item.id}".`;
    ids.add(item.id);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) return `Dispatch "${item.title?.en || item.id}" needs a date.`;
  }
  const refs = new Set();
  for (const job of content.jobs) {
    const name = job?.title?.en || job?.id || '?';
    if (!job?.ref) return `Role "${name}" needs a reference code.`;
    if (refs.has(job.ref)) return `Two roles share the reference code "${job.ref}".`;
    refs.add(job.ref);
  }

  if (content.events.filter((e) => e.featured).length > 1) return 'Only one event can be featured.';
  return null;
}

export async function handleGetContent(headers, env, storage) {
  if (!isAuthorised(headers, env)) return json(401, { error: 'Session expired — please log in again.' });
  const { text, version } = await storage.readContent();
  return json(200, { content: JSON.parse(text), version, mode: storage.mode });
}

export async function handleSaveContent(headers, body, env, storage) {
  if (!isAuthorised(headers, env)) return json(401, { error: 'Session expired — please log in again.' });

  const content = body?.content;
  const problem = validateContent(content);
  if (problem) return json(400, { error: problem });

  const text = `${JSON.stringify(content, null, 2)}\n`;
  if (Buffer.byteLength(text) > MAX_CONTENT_BYTES) return json(413, { error: 'Content is too large.' });

  const result = await storage.writeContent(text, body.version);
  return json(200, { ok: true, mode: storage.mode, ...result });
}

/* ══ Uploads ══ */

function looksLike(kind, buf) {
  if (kind === 'pdf') return buf.subarray(0, 5).toString('latin1') === '%PDF-';
  const head = buf.subarray(0, 12);
  return (
    (head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff) || // jpeg
    head.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) || // png
    (head.subarray(0, 4).toString('latin1') === 'RIFF' && head.subarray(8, 12).toString('latin1') === 'WEBP') ||
    head.subarray(4, 8).toString('latin1') === 'ftyp' // avif
  );
}

export async function handleUpload(headers, body, env, storage) {
  if (!isAuthorised(headers, env)) return json(401, { error: 'Session expired — please log in again.' });

  const kind = UPLOAD_KINDS[body?.kind];
  if (!kind) return json(400, { error: 'Unknown upload type.' });

  const original = String(body.filename || '');
  const ext = original.split('.').pop().toLowerCase();
  if (!kind.exts.includes(ext)) return json(400, { error: `Allowed file types: ${kind.exts.join(', ')}.` });

  const buf = Buffer.from(String(body.data || ''), 'base64');
  if (!buf.length) return json(400, { error: 'The file is empty.' });
  if (buf.length > MAX_UPLOAD_BYTES) return json(413, { error: 'Files must be 3 MB or smaller.' });
  if (!looksLike(body.kind, buf)) return json(400, { error: 'That file does not look like a valid ' + ext.toUpperCase() + '.' });

  const base =
    original
      .slice(0, -(ext.length + 1))
      .normalize('NFKD')
      .replace(/[^\w.-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^[-.]+|[-.]+$/g, '')
      .slice(0, 60) || 'file';
  const name = body.kind === 'pdf' ? `${base}.${ext}` : `${base}-${Date.now().toString(36)}.${ext}`;
  const repoPath = `${kind.dir}/${name}`;

  await storage.writeFile(repoPath, buf, `admin: upload ${name}`);
  return json(200, { path: repoPath.replace(/^public/, ''), filename: name, size: buf.length });
}

/* ══ Storage ══ */

/** Local disk — used by `npm run dev`. Saving updates the running site immediately. */
export function fsStorage(root) {
  const abs = (p) => path.join(root, p);
  return {
    mode: 'local',
    async readContent() {
      const text = await fs.readFile(abs(CONTENT_PATH), 'utf8');
      return { text, version: null };
    },
    async writeContent(text) {
      await fs.writeFile(abs(CONTENT_PATH), text, 'utf8');
      return {};
    },
    async writeFile(repoPath, buf) {
      await fs.mkdir(path.dirname(abs(repoPath)), { recursive: true });
      await fs.writeFile(abs(repoPath), buf);
    },
  };
}

/** GitHub contents API — used on Vercel. Each save is a commit, which triggers a redeploy. */
export function githubStorage(env) {
  const token = env.GITHUB_TOKEN;
  const repo = env.GITHUB_REPO || 'Zebrold/ZebroldGroups';
  const branch = env.GITHUB_BRANCH || 'main';
  if (!token) return null;

  const api = async (method, repoPath, payload) => {
    const url = `https://api.github.com/repos/${repo}/contents/${repoPath}${method === 'GET' ? `?ref=${branch}` : ''}`;
    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(payload ? { 'Content-Type': 'application/json' } : {}),
      },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 409 || res.status === 422) {
      const err = new Error('The content was changed by someone else. Reload the admin and try again.');
      err.status = 409;
      throw err;
    }
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${data.message || 'request failed'}`);
    return data;
  };

  return {
    mode: 'github',
    async readContent() {
      const file = await api('GET', CONTENT_PATH);
      return { text: Buffer.from(file.content, 'base64').toString('utf8'), version: file.sha };
    },
    async writeContent(text, version) {
      const sha = version || (await api('GET', CONTENT_PATH)).sha;
      const out = await api('PUT', CONTENT_PATH, {
        message: 'admin: update site content',
        content: Buffer.from(text, 'utf8').toString('base64'),
        sha,
        branch,
      });
      return { version: out.content?.sha, commitUrl: out.commit?.html_url };
    },
    async writeFile(repoPath, buf, message) {
      let sha;
      try {
        sha = (await api('GET', repoPath)).sha;
      } catch {
        /* new file */
      }
      await api('PUT', repoPath, { message, content: buf.toString('base64'), sha, branch });
    },
  };
}

/** Wraps a handler so storage/network failures come back as JSON, not a crash. */
export async function run(handler) {
  try {
    return await handler();
  } catch (err) {
    console.error('[admin]', err);
    return json(err.status || 500, { error: err.message || 'Server error' });
  }
}
