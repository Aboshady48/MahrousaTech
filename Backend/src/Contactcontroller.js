import { sendContactEmail } from '../src/mailer.js';
import { saveContactMessage, setEmailStatus } from '../src/contactStore.js';

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

  // Step 1: save the message in the database (so it is never lost)
  let saved = null;
  try {
    saved = await saveContactMessage(data);
  } catch (err) {
    console.error('Saving contact message failed:', err.message);
  }

  // Step 2: email it to the company
  let emailed = false;
  try {
    await sendContactEmail(data);
    emailed = true;
  } catch (err) {
    console.error('Contact email failed:', err.message);
  }

  // Step 3: remember in the database whether the email went out
  if (saved) {
    try {
      await setEmailStatus(saved.id, emailed ? 'sent' : 'failed');
    } catch (err) {
      console.error('Updating email status failed:', err.message);
    }
  }

  // Success if at least one of the two worked. Only fail if both did.
  if (!saved && !emailed) {
    const publicError = new Error('Could not send your message. Please try again.');
    publicError.status = 502;
    return next(publicError);
  }

  res.status(201).json({ ok: true });
}