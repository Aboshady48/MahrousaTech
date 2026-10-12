import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cd-cta">
          <h2>Have a project in mind?</h2>
          <p className="lead">
            Tell us what you want to build and we'll reply within one business
            day.
          </p>
          <Link to="/contact" className="btn btn--teal">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  )
}