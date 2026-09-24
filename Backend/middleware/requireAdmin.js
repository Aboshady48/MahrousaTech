import { supabaseAdmin } from '../src/supabaseClient.js';

// Must run AFTER requireAuth — relies on req.user being set already
export async function requireAdmin(req, res, next) {
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', req.user.id)
    .single();

  if (error || data?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  next();
}