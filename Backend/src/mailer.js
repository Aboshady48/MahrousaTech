import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const escapeHtml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function sendContactEmail({ name, email, company, message }) {
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    '',
    message,
  ].join('\n');

  const html = `
    <h2>New contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br>
       <strong>Email:</strong> ${escapeHtml(email)}<br>
       <strong>Company:</strong> ${escapeHtml(company || '-')}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  await transporter.sendMail({
    from: {
      name: process.env.MAIL_FROM_NAME || 'Website',
      address: process.env.SMTP_USER,
    },
    to: process.env.CONTACT_RECEIVER,
    replyTo: { name, address: email }, // hitting "Reply" answers the visitor
    subject: `New contact message from ${name}`,
    text,
    html,
  });
}