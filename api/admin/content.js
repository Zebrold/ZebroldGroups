/** Vercel Serverless Function: GET / PUT /api/admin/content */
import { handleGetContent, handleSaveContent, githubStorage, run } from '../_lib/admin.js';

const NOT_CONFIGURED = {
  error: 'Publishing is not configured on this deployment. Set GITHUB_TOKEN in the Vercel project settings.',
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const storage = githubStorage(process.env);
  if (!storage) return res.status(501).json(NOT_CONFIGURED);

  let out;
  if (req.method === 'GET') out = await run(() => handleGetContent(req.headers, process.env, storage));
  else if (req.method === 'PUT') out = await run(() => handleSaveContent(req.headers, req.body, process.env, storage));
  else return res.status(405).json({ error: 'Method Not Allowed' });

  return res.status(out.status).json(out.body);
}
