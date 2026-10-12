import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Cta.css'

export default function Cta({
  title = "Let's start with a short conversation",
  text = "Tell us about your environment or the product you want to build; we'll suggest the next step.",
  label = 'Book a consultation',
  to = '/contact',
}) {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <div className="cta__text">
            <h2 id="cta-title">{title}</h2>
            <p>{text}</p>
          </div>

          <Link to={to} className="btn btn--teal cta__action">
            {label}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}