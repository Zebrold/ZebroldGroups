/**
 * Candidate uploads on /careers/apply — shared by the form and api/_lib/email.js.
 *
 * Files travel base64-encoded (+33%) inside the JSON body of /api/send-email and
 * reach the talent inbox as Resend attachments. Vercel rejects function request
 * bodies over 4.5 MB, so 3 MB of files is the most that fits alongside the text
 * fields. Accepting larger portfolios would need direct-to-storage uploads
 * (e.g. Vercel Blob) rather than a bigger limit here.
 */

export const APPLICATION_FILE_TYPES = ['pdf', 'doc', 'docx', 'zip', 'step', 'stp'];

export const APPLICATION_FILES_ACCEPT = APPLICATION_FILE_TYPES.map((ext) => `.${ext}`).join(',');

/** Combined size of all files in one application. */
export const MAX_APPLICATION_FILES_BYTES = 3 * 1024 * 1024;

export const MAX_APPLICATION_FILES = 2;

export const extensionOf = (filename) =>
  filename.includes('.') ? filename.split('.').pop().toLowerCase() : '';
