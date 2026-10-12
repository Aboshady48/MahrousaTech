import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import './Hero.css'

const POINTS = [
  'Security-first by design',
  'Built around your existing systems',
  'Clear scope and regular demos',
]

export default function Hero() {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <div className="eyebrow">Identity, access &amp; custom software</div>
        <h1>
          Identity security and custom software,<br />
          <em>delivered by one team.</em>
        </h1>
        <p className="lead">
          Al-Mahrousa helps organizations control who can access their systems,
          and builds the web, mobile and AI software they run on.
        </p>
        <div className="row">
          <Link to="/contact" className="btn">Book a consultation</Link>
          <Link to="/solutions" className="btn btn--ghost">Explore solutions</Link>
        </div>
        <ul className="hero__points">
          {POINTS.map((p) => (
            <li key={p}>
              <Check size={18} aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}