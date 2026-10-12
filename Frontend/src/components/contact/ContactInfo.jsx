const DETAILS = [
  { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { label: 'Phone', value: '+20 000 000 0000', href: 'tel:+200000000000' },
]

export default function ContactInfo() {
  return (
    <div className="contact__intro">
      <h1>Contact us</h1>
      <p className="lead">
        Tell us what you're working on and we'll reply within one business day.
      </p>

      <dl className="contact__details">
        {DETAILS.map(({ label, value, href }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              <a href={href}>{value}</a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}