import { Link } from 'react-router-dom'
import { IdCard, FileText, Layers } from 'lucide-react'
import './ServiceCards.css'

const services = [
  { icon: IdCard, title: 'Identity & access management' },
  { icon: FileText, title: 'Governance & compliance' },
  { icon: Layers, title: 'Integration & delivery' },
]

export default function ServiceCards() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="eyebrow">Solutions</div>
        <h2 className="sc__title">What we deliver</h2>
        <p className="lead">
          The services below are structural examples until the Al-Mahrousa team
          confirms its service list.
        </p>
        <div className="sc__grid">
          {services.map(({ icon: Icon, title }, i) => (
            <article className="sc__card" key={title}>
              <div className="sc__top">
                <Icon size={32} color="var(--teal)" aria-hidden="true" />
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>Two-line outcome. [needs confirmation]</p>
              <Link to="/solutions">• Solutions →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}