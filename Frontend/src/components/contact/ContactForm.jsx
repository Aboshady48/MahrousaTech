import FormField from './FormField'
import useContactForm from './useContactForm.js'

export default function ContactForm() {
  const { values, status, handleChange, handleSubmit, reset } = useContactForm()

  if (status === 'sent') {
    return (
      <div className="contact__card contact__success" role="status">
        <h2>Message sent</h2>
        <p>Thanks for reaching out. We'll reply by email soon.</p>
        <button type="button" className="contact__submit" onClick={reset}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact__card" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        autoComplete="name"
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        autoComplete="email"
        required
      />
      <FormField
        label="Company (optional)"
        name="company"
        value={values.company}
        onChange={handleChange}
        autoComplete="organization"
      />
      <FormField
        as="textarea"
        label="Message"
        name="message"
        rows={5}
        value={values.message}
        onChange={handleChange}
        required
      />

      {status === 'error' && (
        <p className="contact__error" role="alert">
          Your message didn't send. Check your connection and try again.
        </p>
      )}

      <button
        type="submit"
        className="contact__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}