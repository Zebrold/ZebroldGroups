/**
 * /admin — content desk for the parts of the site that change often.
 *
 * It edits src/content/siteContent.json through the existing API in api/admin/*:
 *   • `npm run dev`  saves straight to the working tree, so the site updates at once
 *   • on Vercel      each save is a commit to the repo, which triggers a redeploy
 *
 * The password is never in this bundle — login is checked server-side against
 * ADMIN_EMAIL / ADMIN_PASSWORD, and the session is a short-lived signed token.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Field from './AdminFields';
import { COLLECTIONS, rowTitle, validate } from './adminSchema';
import './Admin.css';

const SESSION_KEY = 'zebrold.admin.session';

/* ══ API ══ */

async function api(path, { method = 'GET', token, body } = {}) {
  const res = await fetch(`/api/admin${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (${res.status}).`);
    err.status = res.status;
    throw err;
  }
  return data;
}

function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    return session?.token && session.expires > Date.now() ? session : null;
  } catch {
    return null;
  }
}

function storeSession(session) {
  try {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* private browsing — the session just will not survive a reload */
  }
}

/* ══ Login ══ */

function Login({ onSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const out = await api('/login', { method: 'POST', body: { email, password } });
      onSignedIn({ token: out.token, expires: out.expires });
    } catch (err) {
      setError(err.message);
      setPassword('');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="adm-login">
      <form className="adm-loginCard" onSubmit={submit}>
        <span className="adm-loginMark" aria-hidden="true" />
        <h1>Zebrold IHL content desk</h1>
        <p className="adm-loginIntro">Sign in to update events, dispatches and investor information.</p>

        <label className="adm-label" htmlFor="adm-email">
          Username
        </label>
        <input
          id="adm-email"
          type="email"
          autoComplete="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="adm-label" htmlFor="adm-password">
          Password
        </label>
        <input
          id="adm-password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="adm-alert adm-alert--error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="adm-btn adm-btn--primary" disabled={busy}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

/* ══ One record ══ */

function Record({ collection, item, index, count, open, onToggle, onPatch, onMove, onDelete, upload }) {
  const fields = collection.fields.filter((f) => !f.when || f.when(item));

  return (
    <li className={`adm-record ${open ? 'is-open' : ''}`}>
      <div className="adm-record__bar">
        <button type="button" className="adm-record__toggle" onClick={onToggle} aria-expanded={open}>
          <span className="adm-record__chev" aria-hidden="true" />
          <span className="adm-record__name">{rowTitle(collection, item)}</span>
          {item.featured && <span className="adm-tag">Featured</span>}
        </button>
        <div className="adm-record__tools">
          <button type="button" className="adm-icon" onClick={() => onMove(-1)} disabled={index === 0} aria-label="Move up">
            ↑
          </button>
          <button
            type="button"
            className="adm-icon"
            onClick={() => onMove(1)}
            disabled={index === count - 1}
            aria-label="Move down"
          >
            ↓
          </button>
          <button type="button" className="adm-icon adm-icon--danger" onClick={onDelete} aria-label="Delete">
            ✕
          </button>
        </div>
      </div>

      {open && (
        <div className="adm-record__body">
          {fields.map((field) => (
            <Field key={field.key} field={field} item={item} onPatch={onPatch} upload={upload} />
          ))}
        </div>
      )}
    </li>
  );
}

/* ══ Editor ══ */

function Editor({ session, onSignOut }) {
  const [content, setContent] = useState(null);
  const [baseline, setBaseline] = useState('');
  const [version, setVersion] = useState(null);
  const [mode, setMode] = useState('');
  const [tab, setTab] = useState(COLLECTIONS[0].id);
  const [openRows, setOpenRows] = useState({});
  const [status, setStatus] = useState({ kind: 'loading', message: 'Loading content…' });
  const [saving, setSaving] = useState(false);
  const listRef = useRef(null);

  const signOut = useCallback((message) => onSignOut(message), [onSignOut]);

  const call = useCallback(
    async (path, options) => {
      try {
        return await api(path, { ...options, token: session.token });
      } catch (err) {
        if (err.status === 401) signOut('Your session expired — please sign in again.');
        throw err;
      }
    },
    [session.token, signOut],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const out = await call('/content');
        if (cancelled) return;
        setContent(out.content);
        setBaseline(JSON.stringify(out.content));
        setVersion(out.version);
        setMode(out.mode);
        setStatus({ kind: 'idle', message: '' });
      } catch (err) {
        if (!cancelled) setStatus({ kind: 'error', message: err.message });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [call]);

  const dirty = content !== null && JSON.stringify(content) !== baseline;
  const problems = useMemo(() => (content ? validate(content) : []), [content]);

  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const upload = useCallback((body) => call('/upload', { method: 'POST', body }), [call]);

  const collection = COLLECTIONS.find((c) => c.id === tab);
  const items = content?.[tab] ?? [];

  const updateList = (next) => setContent((prev) => ({ ...prev, [tab]: next }));

  const patchItem = (index, patch) => {
    const exclusives = collection.fields.filter((f) => f.exclusive && f.key in patch && patch[f.key]);
    updateList(
      items.map((item, i) => {
        if (i === index) return { ...item, ...patch };
        // Only one record may hold an exclusive flag such as "featured".
        if (exclusives.length) {
          const cleared = Object.fromEntries(exclusives.map((f) => [f.key, false]));
          return { ...item, ...cleared };
        }
        return item;
      }),
    );
  };

  const addItem = () => {
    const item = collection.blank();
    updateList([...items, item]);
    setOpenRows((prev) => ({ ...prev, [`${tab}:${items.length}`]: true }));
    requestAnimationFrame(() => listRef.current?.lastElementChild?.scrollIntoView({ block: 'center' }));
  };

  const deleteItem = (index) => {
    const name = rowTitle(collection, items[index]);
    if (!window.confirm(`Delete “${name}”? This is removed from the site when you publish.`)) return;
    updateList(items.filter((_, i) => i !== index));
  };

  const moveItem = (index, delta) => {
    const next = [...items];
    const target = index + delta;
    [next[index], next[target]] = [next[target], next[index]];
    updateList(next);
  };

  const save = async () => {
    if (problems.length) {
      setTab(problems[0].tab);
      setStatus({ kind: 'error', message: 'Fix the highlighted problems before publishing.' });
      return;
    }
    setSaving(true);
    setStatus({ kind: 'loading', message: 'Publishing…' });
    try {
      const out = await call('/content', { method: 'PUT', body: { content, version } });
      setBaseline(JSON.stringify(content));
      if (out.version) setVersion(out.version);
      setStatus({
        kind: 'ok',
        message:
          out.mode === 'github'
            ? 'Published. The site rebuilds in a minute or two.'
            : 'Saved — the site has updated.',
        link: out.commitUrl,
      });
    } catch (err) {
      setStatus({ kind: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  };

  const revert = () => {
    if (!window.confirm('Discard every change made since the last publish?')) return;
    setContent(JSON.parse(baseline));
    setStatus({ kind: 'idle', message: '' });
  };

  if (!content) {
    return (
      <div className="adm-loading">
        <p className={status.kind === 'error' ? 'adm-alert adm-alert--error' : ''}>{status.message}</p>
        {status.kind === 'error' && (
          <button type="button" className="adm-btn adm-btn--ghost" onClick={() => signOut()}>
            Sign out
          </button>
        )}
      </div>
    );
  }

  const tabProblems = (id) => problems.filter((p) => p.tab === id).length;

  return (
    <div className="adm">
      <header className="adm-top">
        <div className="adm-top__brand">
          <span className="adm-loginMark adm-loginMark--sm" aria-hidden="true" />
          <div>
            <strong>Content desk</strong>
            <span className="adm-top__mode">
              {mode === 'github' ? 'Publishes to the live site' : 'Local preview — saves to this machine'}
            </span>
          </div>
        </div>
        <div className="adm-top__actions">
          <a className="adm-btn adm-btn--ghost" href="/" target="_blank" rel="noreferrer">
            View site
          </a>
          <button type="button" className="adm-btn adm-btn--ghost" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </header>

      <div className="adm-body">
        <nav className="adm-tabs" aria-label="Content sections">
          {COLLECTIONS.map((c) => {
            const n = tabProblems(c.id);
            return (
              <button
                key={c.id}
                type="button"
                className={`adm-tab ${tab === c.id ? 'is-active' : ''}`}
                onClick={() => setTab(c.id)}
              >
                <span className="adm-tab__label">{c.label}</span>
                <span className="adm-tab__count">{n ? `${n} ⚠` : content[c.id].length}</span>
              </button>
            );
          })}
        </nav>

        <main className="adm-main">
          <div className="adm-sectionHead">
            <div>
              <h2>{collection.label}</h2>
              <p className="adm-where">{collection.where}</p>
              {collection.help && <p className="adm-hint">{collection.help}</p>}
            </div>
            <button type="button" className="adm-btn adm-btn--primary" onClick={addItem}>
              Add {collection.noun}
            </button>
          </div>

          {problems.filter((p) => p.tab === tab).length > 0 && (
            <ul className="adm-alert adm-alert--error adm-problems">
              {problems
                .filter((p) => p.tab === tab)
                .map((p) => (
                  <li key={p.message}>{p.message}</li>
                ))}
            </ul>
          )}

          {tab === 'calendar' && (
            <div className="adm-field adm-field--standalone">
              <label className="adm-label" htmlFor="adm-calendarPeriod">
                Calendar period
              </label>
              <input
                id="adm-calendarPeriod"
                type="text"
                value={content.calendarPeriod ?? ''}
                onChange={(e) => setContent((prev) => ({ ...prev, calendarPeriod: e.target.value }))}
              />
              <p className="adm-hint">The pill beside the calendar heading, e.g. “2026 / 2027”.</p>
            </div>
          )}

          {items.length === 0 ? (
            <p className="adm-empty">Nothing here yet. Use “Add {collection.noun}” to create the first one.</p>
          ) : (
            <ul className="adm-records" ref={listRef}>
              {items.map((item, index) => {
                const key = `${tab}:${index}`;
                return (
                  <Record
                    key={item.id || key}
                    collection={collection}
                    item={item}
                    index={index}
                    count={items.length}
                    open={Boolean(openRows[key])}
                    onToggle={() => setOpenRows((prev) => ({ ...prev, [key]: !prev[key] }))}
                    onPatch={(patch) => patchItem(index, patch)}
                    onMove={(delta) => moveItem(index, delta)}
                    onDelete={() => deleteItem(index)}
                    upload={upload}
                  />
                );
              })}
            </ul>
          )}
        </main>
      </div>

      <footer className={`adm-save ${dirty ? 'is-dirty' : ''}`}>
        <div className="adm-save__state">
          {status.message && (
            <span className={`adm-saveMsg adm-saveMsg--${status.kind}`}>
              {status.message}
              {status.link && (
                <>
                  {' '}
                  <a href={status.link} target="_blank" rel="noreferrer">
                    View the change
                  </a>
                </>
              )}
            </span>
          )}
          {!status.message && <span className="adm-saveMsg">{dirty ? 'Unpublished changes' : 'Everything is published'}</span>}
        </div>
        <div className="adm-save__actions">
          <button type="button" className="adm-btn adm-btn--ghost" onClick={revert} disabled={!dirty || saving}>
            Discard changes
          </button>
          <button type="button" className="adm-btn adm-btn--primary" onClick={save} disabled={!dirty || saving}>
            {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ══ Page ══ */

export default function Admin() {
  const [session, setSession] = useState(loadSession);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Content desk — Zebrold IHL';

    // index.html ships an indexable robots tag, so override that one rather
    // than adding a second, contradictory tag.
    const existing = document.head.querySelector('meta[name="robots"]');
    const meta = existing ?? Object.assign(document.createElement('meta'), { name: 'robots' });
    const previousRobots = existing?.content ?? null;
    meta.content = 'noindex, nofollow';
    if (!existing) document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      if (previousRobots === null) meta.remove();
      else meta.content = previousRobots;
    };
  }, []);

  const signIn = (next) => {
    storeSession(next);
    setNotice('');
    setSession(next);
  };

  const signOut = (message = '') => {
    storeSession(null);
    setSession(null);
    setNotice(message);
  };

  if (!session) {
    return (
      <>
        {notice && (
          <p className="adm-alert adm-alert--error adm-notice" role="alert">
            {notice}
          </p>
        )}
        <Login onSignedIn={signIn} />
      </>
    );
  }

  return <Editor session={session} onSignOut={signOut} />;
}
