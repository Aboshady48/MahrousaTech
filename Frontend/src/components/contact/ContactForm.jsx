import FormField from './FormField'
import useContactForm from './useContactForm.js'

export default function ContactForm() {
  const { values, status, errorMessage, handleChange, handleSubmit, reset } =
    useContactForm()

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
        maxLength={100}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        autoComplete="email"
        maxLength={254}
        required
      />
      <FormField
        label="Company (optional)"
        name="company"
        value={values.company}
        onChange={handleChange}
        autoComplete="organization"
        maxLength={100}
      />
      <FormField
        as="textarea"
        label="Message"
        name="message"
        rows={5}
        value={values.message}
        onChange={handleChange}
        minLength={10}
        maxLength={5000}
        required
      />

      {status === 'error' && (
        <p className="contact__error" role="alert">
          {errorMessage}
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