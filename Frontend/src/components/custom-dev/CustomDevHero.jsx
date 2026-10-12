import { Link } from 'react-router-dom'

export default function CustomDevHero() {
  return (
    <section className="section cd-hero">
      <div className="container cd-hero__inner">
        <p className="eyebrow">Custom development</p>
        <h1>
          Custom software, <em>built around your business</em>
        </h1>
        <p className="lead">
          From web and mobile apps to custom AI agents and backend services,
          Al-Mahrousa designs and builds software that fits how your team
          actually works.
        </p>
        <div className="row">
          <Link to="/contact" className="btn btn--teal">
            Start a project
          </Link>
          <a href="#services" className="btn btn--ghost">
            See what we build
          </a>
        </div>
      </div>
    </section>
  )
}