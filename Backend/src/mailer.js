import nodemailer from 'nodemailer';
import 'dotenv/config';
import { buildContactEmail } from './Emailtemplate.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({ name, email, company, message }) {
  const { subject, text, html } = buildContactEmail({ name, email, company, message });

  const info = await transporter.sendMail({
    from: {
      name: process.env.MAIL_FROM_NAME || 'Website',
      address: process.env.SMTP_USER,
    },
    to: process.env.CONTACT_RECEIVER,
    replyTo: { name, address: email }, // hitting "Reply" answers the visitor
    subject,
    text,
    html,
  });

  // Shows in the backend terminal what the mail server did with the message
  console.log('Mail result:', {
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
}