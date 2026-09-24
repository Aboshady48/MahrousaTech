import { supabaseAdmin } from '../src/supabaseClient.js';

export async function createUser(req, res, next) {
  try {
    const { email, password, full_name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'email and password are required' });
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // skip email verification since an admin is creating this
      user_metadata: { full_name },
    });

    if (error) throw error;

    res.status(201).json({
      id: data.user.id,
      email: data.user.email,
    });
  } catch (err) {
    next(err);
  }
}