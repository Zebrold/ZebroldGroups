import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { handleLogin, handleGetContent, handleSaveContent, handleUpload, fsStorage, run } from './api/_lib/admin.js'

/** Local stand-in for api/admin/* — edits are written straight to the working tree. */
function adminDevApi(env) {
  const storage = fsStorage(process.cwd());
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
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      adminDevApi({ ...process.env, ...env }),
      {
        name: 'resend-local-dev-api',
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                const fromAddress = data.from || env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'Zebrold Group <onboarding@resend.dev>';

              const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: fromAddress,
                  to: Array.isArray(data.to) ? data.to : [data.to],
                  subject: data.subject,
                  html: data.html || `<p>${data.text || ''}</p>`,
                  text: data.text,
                  reply_to: data.replyTo,
                }),
              });

              const result = await resendResponse.json();
              res.statusCode = resendResponse.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        });
      },
    },
  ],
    build: {
      chunkSizeWarningLimit: 1600,
    },
  };
});

