// Builds the notification email sent to the company when someone uses the contact form.
// Email clients ignore most modern CSS, so this uses tables and inline styles on purpose.

const TEAL = '#00786f'
const DARK = '#0e0e16'
const FONT = "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// Escape first, then turn new lines into <br> (keeps the visitor's paragraphs)
const withLineBreaks = (s) => escapeHtml(s).replace(/\r?\n/g, '<br>')

function detailRow(label, valueHtml) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eceff3;width:110px;vertical-align:top;font-family:${FONT};font-size:14px;color:#6b7785;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #eceff3;vertical-align:top;font-family:${FONT};font-size:16px;color:#1f2933;">${valueHtml}</td>
    </tr>`
}

export function buildContactEmail({ name, email, company, message }) {
  const receivedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Africa/Cairo',
  })

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const preview = escapeHtml(message.replace(/\s+/g, ' ').slice(0, 90))
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent('Re: your message to Al-Mahrousa')}`

  // The logo is embedded in the email as an inline attachment (see mailer.js,
  // cid "logo@mahrousa"), so it works without a public URL.
  // The alt text is shown if the email app blocks images.
  const logo = `<img src="cid:logo@mahrousa" alt="Al-Mahrousa" width="240" height="30" style="display:block;width:240px;height:30px;border:0;font-family:${FONT};font-size:20px;font-weight:600;letter-spacing:2px;color:#ffffff;">`

  const subject = company
    ? `New message from ${name} (${company})`
    : `New message from ${name}`

  const text = [
    'NEW CONTACT MESSAGE',
    `Received: ${receivedAt} (Cairo time)`,
    '',
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || '-'}`,
    '',
    'Message:',
    message,
    '',
    '---',
    'Replying to this email goes straight to the sender.',
  ].join('\n')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>New contact message</title>
</head>
<body style="margin:0;padding:0;background:#f2f4f7;">
  <!-- Preview text shown in the inbox list -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preview}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f2f4f7;">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e3e7ec;border-radius:12px;">

          <!-- Header -->
          <tr>
            <td bgcolor="${DARK}" style="background:${DARK};padding:24px 32px;border-bottom:3px solid ${TEAL};border-radius:12px 12px 0 0;">
              ${logo}
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 32px 8px;">
              <p style="margin:0 0 8px;font-family:${FONT};font-size:13px;letter-spacing:1px;text-transform:uppercase;color:${TEAL};">New contact message</p>
              <h1 style="margin:0 0 8px;font-family:${FONT};font-size:24px;line-height:1.3;font-weight:600;color:#1f2933;">${safeName} sent you a message</h1>
              <p style="margin:0;font-family:${FONT};font-size:14px;color:#6b7785;">Received ${escapeHtml(receivedAt)} (Cairo time)</p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:16px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${detailRow('Name', safeName)}
                ${detailRow('Email', `<a href="${replyHref}" style="color:${TEAL};text-decoration:none;">${safeEmail}</a>`)}
                ${detailRow('Company', company ? escapeHtml(company) : '<span style="color:#9aa5b1;">Not provided</span>')}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:20px 32px 8px;">
              <p style="margin:0 0 10px;font-family:${FONT};font-size:14px;color:#6b7785;">Message</p>
              <div style="background:#f6f8fa;border-left:4px solid ${TEAL};border-radius:0 8px 8px 0;padding:18px 20px;font-family:${FONT};font-size:16px;line-height:1.65;color:#1f2933;">${withLineBreaks(message)}</div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td style="padding:24px 32px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${TEAL}" style="border-radius:8px;">
                    <a href="${replyHref}" style="display:inline-block;padding:14px 28px;font-family:${FONT};font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">Reply to ${safeName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f6f8fa;border-top:1px solid #e3e7ec;border-radius:0 0 12px 12px;padding:20px 32px;font-family:${FONT};font-size:13px;line-height:1.6;color:#6b7785;">
              Sent from the contact form on the Al-Mahrousa website.<br>
              Replying to this email goes straight to ${safeName}.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, text, html }
}