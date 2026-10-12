import { supabase } from './supabase'

export async function sendContact(d) {
    if (!supabase) {
        await new Promise((r) => setTimeout(r, 1000))
        return { ok: true }
    }

    const { error } = await supabase.from('contact_messages').insert({
        name: d.name,
        job_title: d.jobTitle || null,
        email: d.email,
        phone: d.phone || null,
        organization: d.organization,
        topic: d.topic,
        message: d.message || null,
        consent: d.consent,
    })

    if (error) return { ok: false, errors: {}, message: error.message }
    return { ok: true }
}