/** Vercel Serverless Function: POST /api/admin/login */
import { handleLogin, run } from '../_lib/admin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const out = await run(() => handleLogin(req.body, process.env));
  return res.status(out.status).json(out.body);
}
