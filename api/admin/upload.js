/** Vercel Serverless Function: POST /api/admin/upload */
import { handleUpload, githubStorage, run } from '../_lib/admin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const storage = githubStorage(process.env);
  if (!storage) {
    return res.status(501).json({ error: 'Uploads are not configured on this deployment. Set GITHUB_TOKEN.' });
  }
  const out = await run(() => handleUpload(req.headers, req.body, process.env, storage));
  return res.status(out.status).json(out.body);
}
