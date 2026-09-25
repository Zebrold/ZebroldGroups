/**
 * Public-form email — shared by the Vercel function api/send-email.js and the Vite
 * dev middleware in vite.config.js. Framework-agnostic: takes plain values and
 * returns { status, body }.
 *
 * The server composes every message. Callers choose a form type and send field
 * values only — never recipients, senders or HTML — so the endpoint cannot be used
 * as an open relay. Each submission sends:
 *   1. a notification to the internal inbox (must succeed, else 502)
 *   2. a confirmation to the visitor (best effort)
 *
 * Environment:
 *   RESEND_API_KEY               required
 *   RESEND_FROM_EMAIL            sender, e.g. "Zebrold IHL <no-reply@zebrold.de>". Its
 *                                domain must be verified in Resend; the fallback
 *                                onboarding@resend.dev only delivers to the Resend
 *                                account owner's own address.
 *   TALENT_NOTIFICATION_EMAIL    inbox for job applications (default talent.acquisition@zebrold.de)
 *   CONTACT_NOTIFICATION_EMAIL   inbox for contact enquiries (default info@zebrold.de)
 */

import { LOCATIONS } from '../../src/data/locations.js';

const DEFAULT_FROM = 'Zebrold IHL <onboarding@resend.dev>';
const SITE_URL = 'https://www.zebrold.de';
const LINKEDIN_URL = 'https://www.linkedin.com/company/zebrold';
// public/email-logo.png is 360×190; the tag's width/height keep that ratio so
// mail clients can't squash it.
const LOGO = { url: `${SITE_URL}/email-logo.png`, width: 91, height: 48 };
const BRAND = '#792D32';
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/;

const json = (status, body) => ({ status, body });

/* ══ Input helpers ══ */

const field = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const oneLine = (value) => value.replace(/[\r\n]+/g, ' ');

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const html = (value) => escapeHtml(value).replace(/\n/g, '<br/>');

const langOf = (value) => (value === 'de' ? 'de' : 'en');

/* ══ Layout ══ */

function locationCell(loc, lang, side) {
  const pad = side === 'left' ? 'padding:0 12px 16px 0;' : 'padding:0 0 16px 12px;';
  return `<td width="50%" valign="top" style="${pad}">
            <div style="font-size:12px; font-weight:700; color:#111827; margin:0 0 3px 0;">${escapeHtml(loc.title[lang] || loc.title.en)}</div>
            <div style="font-size:11.5px; line-height:1.5; color:#6B7280;">${escapeHtml(loc.fullAddress)}</div>
          </td>`;
}

function footer(lang) {
  const rows = [];
  for (let i = 0; i < LOCATIONS.length; i += 2) {
    const [left, right] = LOCATIONS.slice(i, i + 2);
    rows.push(`<tr>${locationCell(left, lang, 'left')}${right ? locationCell(right, lang, 'right') : '<td width="50%"></td>'}</tr>`);
  }
  const link = `color:${BRAND}; font-weight:600; text-decoration:none;`;

  return `<tr><td style="background-color:#F9FAFB; padding:24px 32px; border-top:1px solid #E5E7EB;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">${rows.join('')}</table>
          <div style="border-top:1px solid #E5E7EB; padding-top:16px; text-align:center; font-size:12.5px;">
            <a href="${LINKEDIN_URL}" style="${link}">LinkedIn</a>
            <span style="color:#D1D5DB;">&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
            <a href="${SITE_URL}" style="${link}">www.zebrold.de</a>
          </div>
          <div style="text-align:center; font-size:11px; color:#9CA3AF; margin-top:10px;">&copy; ${new Date().getFullYear()} Zebrold International Holdings Limited</div>
        </td></tr>`;
}

function layout({ lang, heading, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(heading)}</title></head>
<body style="margin:0; padding:0; background-color:#F3F4F6; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#111827;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F3F4F6; padding:40px 12px;">
    <tr><td align="center">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px; background-color:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; overflow:hidden;">
        <tr><td style="padding:22px 32px; border-bottom:3px solid ${BRAND};">
          <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr>
            <td align="left" valign="middle"><img src="${LOGO.url}" alt="Zebrold" width="${LOGO.width}" height="${LOGO.height}" style="display:block; width:${LOGO.width}px; height:${LOGO.height}px; max-width:${LOGO.width}px; border:0;" /></td>
            <td align="right" valign="middle" style="font-size:15px; font-weight:700; line-height:1.25; color:#111827;">Zebrold International<br/>Holdings Limited</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:32px;">
          <h1 style="font-size:21px; font-weight:700; color:#111827; margin:0 0 18px 0;">${escapeHtml(heading)}</h1>
          ${bodyHtml}
        </td></tr>
        ${footer(lang)}
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const paragraph = (inner) => `<p style="font-size:14.5px; line-height:1.7; color:#374151; margin:0 0 16px 0;">${inner}</p>`;

function detailsTable(rows) {
  const cells = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0; color:#6B7280; font-size:13px; vertical-align:top; white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0; color:#111827; font-size:13.5px; font-weight:600;">${value}</td></tr>`
    )
    .join('');
  return `<table border="0" cellspacing="0" cellpadding="0" style="margin:0 0 20px 0;">${cells}</table>`;
}

const noteBlock = (title, text) =>
  `<div style="background-color:#F9FAFB; border:1px solid #E5E7EB; border-left:4px solid ${BRAND}; padding:16px; border-radius:4px; font-size:13.5px; line-height:1.6; color:#374151;"><div style="font-weight:700; margin-bottom:8px; color:#111827;">${escapeHtml(title)}</div>${html(text)}</div>`;

const mailto = (email) => `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND};">${escapeHtml(email)}</a>`;

/* ══ Forms ══ */

const CONFIRMATION_COPY = {
  application: {
    en: {
      subject: (role) => `We've received your application — ${role}`,
      heading: 'Application received',
      greeting: (name) => `Dear ${name},`,
      body: (role) =>
        `Thank you for applying for <strong>${role}</strong> at Zebrold IHL. Your application has reached our talent acquisition team in Frankfurt and Bengaluru, and we will be in touch within five business days.`,
      questions: (inbox) => `If you have any questions in the meantime, reply to this email or write to ${inbox}.`,
      signOff: 'Zebrold IHL Talent Acquisition',
    },
    de: {
      subject: (role) => `Ihre Bewerbung ist eingegangen — ${role}`,
      heading: 'Bewerbung eingegangen',
      greeting: (name) => `Guten Tag ${name},`,
      body: (role) =>
        `vielen Dank für Ihre Bewerbung als <strong>${role}</strong> bei Zebrold IHL. Ihre Unterlagen liegen unserem Recruiting-Team in Frankfurt und Bengaluru vor. Wir melden uns innerhalb von fünf Werktagen bei Ihnen.`,
      questions: (inbox) => `Bei Fragen antworten Sie einfach auf diese E-Mail oder schreiben Sie an ${inbox}.`,
      signOff: 'Ihr Talent-Acquisition-Team von Zebrold IHL',
    },
  },
  contact: {
    en: {
      subject: () => "We've received your message — Zebrold IHL",
      heading: 'Message received',
      greeting: (name) => `Dear ${name},`,
      body: () =>
        'Thank you for contacting Zebrold IHL. Our team has received your message and usually replies within one business day.',
      questions: (inbox) => `If you need to add anything, reply to this email or write to ${inbox}.`,
      signOff: 'Zebrold IHL',
    },
    de: {
      subject: () => 'Ihre Nachricht ist eingegangen — Zebrold IHL',
      heading: 'Nachricht eingegangen',
      greeting: (name) => `Guten Tag ${name},`,
      body: () =>
        'vielen Dank für Ihre Nachricht an Zebrold IHL. Unser Team hat Ihre Anfrage erhalten und antwortet Ihnen in der Regel innerhalb eines Werktags.',
      questions: (inbox) => `Möchten Sie etwas ergänzen, antworten Sie einfach auf diese E-Mail oder schreiben Sie an ${inbox}.`,
      signOff: 'Ihr Team von Zebrold IHL',
    },
  },
};

function confirmation(kind, { lang, name, role, email, inbox }) {
  const copy = CONFIRMATION_COPY[kind][lang];
  const bodyHtml = [
    paragraph(escapeHtml(copy.greeting(name))),
    paragraph(copy.body(escapeHtml(role))),
    paragraph(copy.questions(mailto(inbox))),
    `<p style="font-size:14.5px; line-height:1.6; color:#111827; font-weight:700; margin:24px 0 0 0;">${escapeHtml(copy.signOff)}</p>`,
  ].join('');

  return {
    to: [email],
    reply_to: inbox,
    subject: oneLine(copy.subject(role)),
    html: layout({ lang, heading: copy.heading, bodyHtml }),
  };
}

function buildApplication(body, env) {
  const f = {
    name: field(body.candidateName, 200),
    email: field(body.email, 254),
    phone: field(body.phone, 60),
    role: field(body.jobTitle, 200) || 'General application',
    roleLabel: field(body.roleLabel, 200),
    department: field(body.department, 200),
    details: field(body.coverNote, 20000),
    cvFileName: field(body.cvFileName, 255),
    lang: langOf(body.lang),
  };
  if (!f.name) return { error: 'Name is required' };
  if (!EMAIL_RE.test(f.email)) return { error: 'A valid email address is required' };

  const inbox =
    env.TALENT_NOTIFICATION_EMAIL || env.VITE_TALENT_NOTIFICATION_EMAIL || 'talent.acquisition@zebrold.de';

  const team = {
    to: [inbox],
    reply_to: f.email,
    subject: oneLine(`[New applicant] ${f.name} — ${f.role}`),
    html: layout({
      lang: 'en',
      heading: `New application: ${f.role}`,
      bodyHtml:
        detailsTable([
          ['Candidate', escapeHtml(f.name)],
          ['Email', mailto(f.email)],
          ['Phone', escapeHtml(f.phone || '—')],
          ['Role', escapeHtml(f.role)],
          ['Department', escapeHtml(f.department || '—')],
          ['CV file name', escapeHtml(f.cvFileName || '—')],
        ]) + (f.details ? noteBlock('Application details', f.details) : ''),
    }),
    text: [
      `New application: ${f.role}`,
      `Candidate: ${f.name}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone || '—'}`,
      `Department: ${f.department || '—'}`,
      `CV file name: ${f.cvFileName || '—'}`,
      '',
      f.details,
    ].join('\n'),
  };

  return {
    team,
    confirmation: confirmation('application', {
      lang: f.lang,
      name: f.name,
      role: f.roleLabel || f.role,
      email: f.email,
      inbox,
    }),
  };
}

function buildContact(body, env) {
  const f = {
    name: field(body.name, 200),
    email: field(body.email, 254),
    company: field(body.company, 200),
    subject: field(body.subject, 200),
    message: field(body.message, 10000),
    lang: langOf(body.lang),
  };
  if (!f.name) return { error: 'Name is required' };
  if (!EMAIL_RE.test(f.email)) return { error: 'A valid email address is required' };
  if (!f.message) return { error: 'Message is required' };

  const inbox = env.CONTACT_NOTIFICATION_EMAIL || 'info@zebrold.de';
  const topic = f.subject || 'General enquiry';

  const team = {
    to: [inbox],
    reply_to: f.email,
    subject: oneLine(`[Website enquiry] ${topic} — ${f.name}`),
    html: layout({
      lang: 'en',
      heading: `Website enquiry: ${topic}`,
      bodyHtml:
        detailsTable([
          ['Name', escapeHtml(f.name)],
          ['Email', mailto(f.email)],
          ['Company', escapeHtml(f.company || '—')],
          ['Subject', escapeHtml(topic)],
        ]) + noteBlock('Message', f.message),
    }),
    text: [
      `Website enquiry: ${topic}`,
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      `Company: ${f.company || '—'}`,
      '',
      f.message,
    ].join('\n'),
  };

  // The receipt deliberately doesn't echo the message, so the form can't be used
  // to push arbitrary text to arbitrary inboxes.
  return {
    team,
    confirmation: confirmation('contact', { lang: f.lang, name: f.name, role: '', email: f.email, inbox }),
  };
}

const BUILDERS = { application: buildApplication, contact: buildContact };

/* ══ Delivery ══ */

async function sendViaResend(apiKey, message) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
    signal: AbortSignal.timeout(10000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Resend responded with ${res.status}`);
  return data.id;
}

export async function handleSendEmail(body, env) {
  if (!env.RESEND_API_KEY) return json(500, { error: 'RESEND_API_KEY is not configured' });

  const build = BUILDERS[body?.type];
  if (!build) return json(400, { error: 'Unknown form type' });

  const built = build(body, env);
  if (built.error) return json(400, { error: built.error });

  const from = env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  try {
    await sendViaResend(env.RESEND_API_KEY, { from, ...built.team });
  } catch (err) {
    console.error('[send-email] team notification failed:', err.message);
    return json(502, { error: `Notification could not be delivered: ${err.message}` });
  }

  let confirmed = true;
  try {
    await sendViaResend(env.RESEND_API_KEY, { from, ...built.confirmation });
  } catch (err) {
    confirmed = false;
    console.error('[send-email] confirmation failed:', err.message);
  }

  return json(200, { success: true, delivered: { team: true, confirmation: confirmed } });
}
