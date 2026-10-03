import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <div className="eyebrow">Identity &amp; Access [needs confirmation]</div>
        <h1>
          Every identity in your<br />organization,<br /><em>guarded.</em>
        </h1>
        <p className="lead">
          We help organizations know who can access what, and why and control it
          with confidence. [needs confirmation]
        </p>
        <div className="row">
          <Link to="/contact" className="btn">Book a consultation</Link>
          <Link to="/solutions" className="btn btn--ghost">Explore solutions</Link>
        </div>
      </div>
    </div>
  )
}