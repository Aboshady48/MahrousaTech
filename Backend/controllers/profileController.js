import { supabaseAdmin } from '../src/supabaseClient.js';

export async function getProfile(req, res, next) {
  try {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', req.user.id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function updateProfile(req, res, next) {
  try {
    const { full_name } = req.body;

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .update({ full_name, updated_at: new Date().toISOString() })
      .eq('id', req.user.id)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
}