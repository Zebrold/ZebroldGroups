import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { handleLogin, handleGetContent, handleSaveContent, handleUpload, fsStorage, run } from './api/_lib/admin.js'
import { handleSendEmail } from './api/_lib/email.js'

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });

/** Local stand-in for api/admin/* — edits are written straight to the working tree. */
function adminDevApi(env) {
  const storage = fsStorage(process.cwd());

  return {
    name: 'admin-local-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/admin', async (req, res) => {
        const route = req.url.split('?')[0];
        const out = await run(async () => {
          if (route === '/login' && req.method === 'POST') return handleLogin(await readBody(req), env);
          if (route === '/content' && req.method === 'GET') return handleGetContent(req.headers, env, storage);
          if (route === '/content' && req.method === 'PUT')
            return handleSaveContent(req.headers, await readBody(req), env, storage);
          if (route === '/upload' && req.method === 'POST')
            return handleUpload(req.headers, await readBody(req), env, storage);
          return { status: 404, body: { error: 'Not found' } };
        });
        res.statusCode = out.status;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(out.body));
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [
      react(),
      adminDevApi(env),
      {
        /* Local stand-in for api/send-email.js — same handler, same rules. */
        name: 'email-local-dev-api',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            const out =
              req.method === 'POST'
                ? await run(async () => handleSendEmail(await readBody(req), env))
                : { status: 405, body: { error: 'Method Not Allowed' } };
            res.statusCode = out.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(out.body));
          });
        },
      },
    ],
    build: {
      chunkSizeWarningLimit: 1600,
    },
  };
});
