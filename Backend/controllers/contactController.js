import { sendContactEmail } from '../src/mailer.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const oneLine = (v, max) =>
  String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

function validate(body = {}) {
  const data = {
    name: oneLine(body.name, 100),
    email: oneLine(body.email, 254),
    company: oneLine(body.company, 100),
    message: String(body.message ?? '').trim().slice(0, 5000),
  };

  const errors = {};
  if (!data.name) errors.name = 'Name is required.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
  if (data.message.length < 10) errors.message = 'Message must be at least 10 characters.';

  return { data, errors };
}

export async function sendContactMessage(req, res, next) {
  const { data, errors } = validate(req.body);

  if (Object.keys(errors).length) {
    return res.status(400).json({
      error: Object.values(errors)[0],
      errors,
    });
  }

  try {
    await sendContactEmail(data);
    res.status(201).json({ ok: true });
  } catch (err) {
    // Log the real SMTP error, but don't leak it to the visitor
    console.error('Contact email failed:', err);
    const publicError = new Error('Could not send your message. Please try again.');
    publicError.status = 502;
    next(publicError);
  }
}