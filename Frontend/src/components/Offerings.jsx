import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Code,
  KeyRound,
  ClipboardCheck,
  Plug,
  Monitor,
  Bot,
  Server,
  ArrowRight,
} from 'lucide-react'
import './Offerings.css'

const OFFERINGS = [
  {
    icon: ShieldCheck,
    title: 'Identity & access management',
    summary: 'Know exactly who can access what, and why, and control it with confidence.',
    items: [
      { icon: KeyRound, name: 'Access management', text: 'Single sign-on, multi-factor authentication and least-privilege access.' },
      { icon: ClipboardCheck, name: 'Governance & compliance', text: 'Access reviews, clear policies and audit-ready reporting.' },
      { icon: Plug, name: 'Integration & delivery', text: 'Directories, apps and cloud services connected into one clear model.' },
    ],
    to: '/solutions',
    cta: 'Explore solutions',
  },
  {
    icon: Code,
    title: 'Custom development',
    summary: 'Software built around how your business actually works.',
    items: [
      { icon: Monitor, name: 'Web & mobile apps', text: 'Portals, dashboards, and iOS and Android apps for your users and staff.' },
      { icon: Bot, name: 'Custom AI agents', text: 'Agents connected to your data and tools for support, research and workflows.' },
      { icon: Server, name: 'Applications & services', text: 'Backends, APIs and integrations that take manual work off your team.' },
    ],
    to: '/custom-development',
    cta: 'See custom development',
  },
]

export default function Offerings() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="eyebrow">What we do</div>
        <h2 className="of__title">Two ways we help</h2>
        <p className="lead">
          Use one service on its own, or combine them: secure access
          and the software that depends on it, planned together.
        </p>

        <div className="of__grid">
          {OFFERINGS.map(({ icon: Icon, title, summary, items, to, cta }) => (
            <article className="of__card" key={title}>
              <span className="of__icon">
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p className="of__summary">{summary}</p>

              <ul className="of__list">
                {items.map(({ icon: ItemIcon, name, text }) => (
                  <li key={name}>
                    <ItemIcon size={20} aria-hidden="true" />
                    <div>
                      <b>{name}</b>
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to={to} className="of__link">
                {cta} <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}