import { Link } from 'react-router-dom'
import './Cta.css'

export default function Cta() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="cta">
          <div>
            <h2>Let's start with a short conversation</h2>
            <p>Tell us about your environment; we'll suggest the next step.</p>
          </div>
          <Link to="/contact" className="btn btn--teal">Book a consultation</Link>
        </div>
      </div>
    </section>
  )
}