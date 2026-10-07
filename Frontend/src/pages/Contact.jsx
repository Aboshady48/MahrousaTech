import { useState } from 'react'
import { sendContact } from '../api/contact'
import './Contact.css'

const topics = [
  'Identity & access management',
  'Governance & compliance',
  'Integration & delivery',
  'Other',
]

const empty = {
  name: '', jobTitle: '', email: '', phone: '',
  organization: '', topic: topics[0], message: '', consent: false,
}

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Enter your full name.'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = 'Enter a full email, like name@company.com'
  if (!f.organization.trim()) e.organization = 'Enter your organization.'
  if (!f.consent) e.consent = 'Please agree to continue.'
  return e
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | failed
  const [serverMsg, setServerMsg] = useState('')

  const set = (key) => (ev) =>
    setForm({ ...form, [key]: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value })

  async function onSubmit(ev) {
    ev.preventDefault()
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length) return

    setStatus('sending')
    try {
      const res = await sendContact(form)
      if (res.ok) { setStatus('done'); return }
      setErrors(res.errors || {})
      setServerMsg(res.message || '')
      setStatus('failed')
    } catch (err) {
      setServerMsg(String(err))
      setStatus('failed')
    }
  }

  if (status === 'done') {
    return (
      <div className="container contact">
        <div className="contact__ok">
          <h2>Your message was received</h2>
          <p className="lead">
            Thank you. Our team will contact you within [needs confirmation] business days.
          </p>
          <button className="btn btn--ghost" onClick={() => { setForm(empty); setStatus('idle') }}>
            Send another message
          </button>
        </div>
      </div>
    )
  }

  const field = (key, label, props = {}) => (
    <label className="f">
      {label}
      <input
        value={form[key]}
        onChange={set(key)}
        aria-invalid={Boolean(errors[key])}
        {...props}
      />
      {errors[key] && <small className="f__err">{errors[key]}</small>}
    </label>
  )

  return (
    <div className="container contact">
      <div className="eyebrow">Contact us</div>
      <h1>Let's start with a short conversation</h1>
      <p className="lead">Tell us about your environment; we'll suggest the next step.</p>

      <div className="contact__grid">
        <form onSubmit={onSubmit} noValidate>
        {status === 'failed' && (
            <div className="contact__alert" role="alert">
              Something went wrong. Check the fields and try again.
              {serverMsg && <><br /><small>{serverMsg}</small></>}
            </div>
          )}
          <div className="two">
            {field('name', 'Full name', { placeholder: 'Sara Ahmed', autoComplete: 'name' })}
            {field('jobTitle', 'Job title (optional)')}
          </div>
          <div className="two">
            {field('email', 'Work email', { type: 'email', placeholder: 'sara@company.com', autoComplete: 'email' })}
            {field('phone', 'Phone (optional)', { type: 'tel', placeholder: '+20', dir: 'ltr' })}
          </div>
          <div className="two">
            {field('organization', 'Organization')}
            <label className="f">
              Inquiry topic
              <select value={form.topic} onChange={set('topic')}>
                {topics.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          </div>
          <label className="f">
            How can we help?
            <small>Mention your current environment and timeline. Do not share passwords or sensitive data.</small>
            <textarea value={form.message} onChange={set('message')} />
          </label>
          <label className="chk">
            <input type="checkbox" checked={form.consent} onChange={set('consent')} />
            <span>I agree to the processing of my data to respond to my request, per the privacy policy.</span>
          </label>
          {errors.consent && <small className="f__err">{errors.consent}</small>}
          <div>
            <button className="btn btn--teal" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message →'}
            </button>
          </div>
        </form>

        <aside className="contact__side">
          <div><h3>Email</h3>[needs confirmation]</div>
          <div><h3>Phone</h3>[needs confirmation]</div>
          <div><h3>Address</h3>[needs confirmation: city and office]</div>
          <div>
            <h3>What to expect</h3>
            1. We review your message.<br />
            2. We reply within [needs confirmation] business days.<br />
            3. We suggest the next step.
          </div>
        </aside>
      </div>
    </div>
  )
}