import { pool } from './db.js';

// Saves one contact message and returns its id.
// The $1, $2... placeholders keep visitor text safe from SQL injection.
export async function saveContactMessage({ name, email, company, message }) {
  const { rows } = await pool.query(
    `INSERT INTO contact_messages (name, email, company, message)
     VALUES ($1, $2, $3, $4)
     RETURNING id`,
    [name, email, company || null, message]
  );
  return rows[0];
}

// status: 'sent' or 'failed'
export async function setEmailStatus(id, status) {
  await pool.query(
    'UPDATE contact_messages SET email_status = $1 WHERE id = $2',
    [status, id]
  );
}