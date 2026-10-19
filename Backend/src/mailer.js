import nodemailer from 'nodemailer';
import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import { buildContactEmail } from './Emailtemplate.js';

const {
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '587',
  SMTP_SECURE = 'false',
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECEIVER,
  MAIL_FROM_NAME = 'Website',
} = process.env;

// Google shows app passwords as "xxxx xxxx xxxx xxxx". Strip spaces and quotes
// so it works whether or not they were copied into .env.
const smtpUser = SMTP_USER?.trim();
const smtpPass = SMTP_PASS?.replace(/[\s'"]/g, '');

// Fail early with a clear message if something is missing
const missing = [
  ['SMTP_USER', smtpUser],
  ['SMTP_PASS', smtpPass],
  ['CONTACT_RECEIVER', CONTACT_RECEIVER],
]
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missing.length) {
  console.error(`Mailer config error: missing ${missing.join(', ')} in .env`);
}

// Logo is embedded in the email itself (CID attachment), so no public URL is needed
const LOGO_PATH = fileURLToPath(new URL('./assets/email-logo.png', import.meta.url));

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 587,
  secure: SMTP_SECURE === 'true', // false for 587 (STARTTLS), true for 465
  auth: { user: smtpUser, pass: smtpPass },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 15_000,
});

// Check credentials once at startup so a bad password shows up immediately
transporter
  .verify()
  .then(() => console.log('SMTP ready: credentials accepted'))
  .catch((err) =>
    console.error('SMTP config error:', err.code, '-', err.response || err.message)
  );

export async function sendContactEmail({ name, email, company, message }) {
  const { subject, text, html } = buildContactEmail({ name, email, company, message });

  const info = await transporter.sendMail({
    from: { name: MAIL_FROM_NAME, address: smtpUser },
    to: CONTACT_RECEIVER,
    replyTo: { name, address: email }, // hitting "Reply" answers the visitor
    subject,
    text,
    html,
    attachments: [
      {
        filename: 'logo.png',
        path: LOGO_PATH,
        cid: 'logo@mahrousa', // referenced in the template as src="cid:logo@mahrousa"
        contentDisposition: 'inline',
      },
    ],
  });

  console.log('Mail result:', {
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });

  // nodemailer only throws on connection/auth errors, so treat rejected
  // recipients as a failure too
  if (!info.accepted?.length || info.rejected?.length) {
    throw new Error(`Mail server rejected recipient(s): ${info.rejected?.join(', ')}`);
  }

  return info;
}