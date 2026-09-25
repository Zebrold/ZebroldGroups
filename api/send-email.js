/** Vercel Serverless Function: POST /api/send-email — see api/_lib/email.js */
import { handleSendEmail } from './_lib/email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const out = await handleSendEmail(req.body, process.env);
  return res.status(out.status).json(out.body);
}
