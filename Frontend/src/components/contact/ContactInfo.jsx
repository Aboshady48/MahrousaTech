const DETAILS = [
  { label: 'Email', value: 'amohamed@mahrousatech.com', href: 'mailto:amohamed@mahrousatech.com' },
  { label: 'Phone', value: '+20 109 044 8712', href: 'tel:+201090448712' },
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