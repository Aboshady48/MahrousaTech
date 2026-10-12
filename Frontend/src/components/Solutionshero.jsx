import { Link } from 'react-router-dom'

export default function SolutionsHero() {
  return (
    <section className="section sol-hero">
      <div className="container sol-hero__inner">
        <p className="eyebrow">Solutions</p>
        <h1>
          Identity and access, <em>under control.</em>
        </h1>
        <p className="lead">
          We help organizations know who has access to what, and why, and keep
          it that way as people, systems and regulations change.
        </p>
        <div className="row">
          <Link to="/contact" className="btn btn--teal">
            Book a consultation
          </Link>
          <Link to="/#approach" className="btn btn--ghost">
            How we work
          </Link>
        </div>
      </div>
    </section>
  )
}