/**
 * Public-form email: job applications and contact enquiries.
 *
 * Messages are composed and sent server-side by /api/send-email (api/_lib/email.js);
 * the browser only submits form fields. If the server can't deliver, the internal
 * copy falls back to FormSubmit so a submission isn't lost. If both fail, the
 * promise rejects so the form shows its error state instead of a false success.
 */

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/e47b516ed3bc726b88a99a2f1de91e8c';

async function postToApi(payload) {
  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Email API responded with ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

async function postToFormSubmit(subject, fields) {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'false', ...fields }),
  });
  const data = await res.json().catch(() => ({}));
  // FormSubmit answers 200 with { success: "false" } when it refuses a message.
  if (!res.ok || String(data.success) !== 'true') {
    throw new Error(data.message || 'FormSubmit rejected the message');
  }
}

async function submit(payload, fallbackSubject, fallbackFields) {
  try {
    return await postToApi(payload);
  } catch (err) {
    // A 4xx means the input itself was rejected — resending elsewhere won't help.
    if (err.status && err.status < 500) throw err;
    console.warn('[email] /api/send-email failed, using FormSubmit fallback:', err.message);
    await postToFormSubmit(fallbackSubject, fallbackFields);
    return { success: true, delivered: { team: true, confirmation: false } };
  }
}

export function sendApplicationEmail({
  candidateName,
  email,
  phone,
  jobTitle,
  roleLabel,
  department,
  coverNote,
  cvFileName,
  lang,
}) {
  return submit(
    { type: 'application', candidateName, email, phone, jobTitle, roleLabel, department, coverNote, cvFileName, lang },
    `[New applicant] ${candidateName} — ${jobTitle}`,
    {
      Candidate: candidateName,
      Email: email,
      Phone: phone,
      Role: jobTitle,
      Department: department,
      'CV file name': cvFileName || '—',
      Details: coverNote,
      _replyto: email,
    }
  );
}

export function sendContactEmail({ name, email, company, subject, message, lang }) {
  return submit(
    { type: 'contact', name, email, company, subject, message, lang },
    `[Website enquiry] ${subject || 'General enquiry'} — ${name}`,
    { Name: name, Email: email, Company: company || '—', Subject: subject || '—', Message: message, _replyto: email }
  );
}
