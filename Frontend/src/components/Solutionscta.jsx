import { Link } from 'react-router-dom'

export default function SolutionsCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="sol-cta">
          <h2>Talk to us about your access challenges</h2>
          <p className="lead">
            Describe your environment and we'll suggest where to start.
          </p>
          <div className="row">
            <Link to="/contact" className="btn btn--teal">
              Book a consultation
            </Link>
            <Link to="/custom-development" className="sol-cta__link">
              Need software built too? See custom development &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}