/**
 * Vercel Serverless Function: /api/send-email
 * Powered by Resend API
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY environment variable is not configured' });
  }

  try {
    const { to, from, subject, html, text, replyTo } = req.body || {};

    if (!to || !subject || (!html && !text)) {
      return res.status(400).json({ error: 'Missing required fields (to, subject, html/text)' });
    }

    // Default sender: once domain is verified on Resend, can use 'Zebrold Group <talent.acquisition@zebrold.de>'
    // Unverified domains must use 'Zebrold Group <onboarding@resend.dev>'
    const fromAddress = from || process.env.RESEND_FROM_EMAIL || 'Zebrold Group <onboarding@resend.dev>';

    const payload = {
      from: fromAddress,
      to: Array.isArray(to) ? to : [to],
      subject: subject,
      html: html || `<p>${text}</p>`,
    };

    if (text) {
      payload.text = text;
    }

    if (replyTo) {
      payload.reply_to = replyTo;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: data.message || 'Failed to send email via Resend',
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      provider: 'Resend',
      id: data.id,
    });
  } catch (err) {
    console.error('[API send-email error]', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error while dispatching email',
    });
  }
}
