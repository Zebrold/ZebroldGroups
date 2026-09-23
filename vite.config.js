import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
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

