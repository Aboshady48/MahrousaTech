import { Eye, FileText, KeyRound, RotateCcw } from 'lucide-react'
import './Steps.css'

const steps = [
  { icon: Eye, title: 'Discover', text: 'Map identities, systems and where access comes from.', out: 'Identity & system map' },
  { icon: FileText, title: 'Assess', text: 'Rank access gaps by business impact.', out: 'Risk & priority report' },
  { icon: KeyRound, title: 'Implement', text: 'Roll out controls gradually, without disruption.', out: 'Active access policies' },
  { icon: RotateCcw, title: 'Sustain', text: 'Review, measure and improve on a schedule.', out: 'Audit-ready periodic reports' },
]

export default function Steps() {
  return (
    <section id="resources" className="section">
      <div className="container">
        <div className="eyebrow eyebrow--plain">Approach [needs confirmation]</div>
        <h2 className="st__title">From visibility to control</h2>
        <p className="lead">
          Four stages that repeat: each cycle starts from what the last one taught us.
        </p>
        <div className="st__grid">
          {steps.map(({ icon: Icon, title, text, out }, i) => (
            <div className="st__step" key={title}>
              <div className="st__head">
                <div className="st__dia"><Icon size={28} aria-hidden="true" /></div>
                <div className="st__line" />
              </div>
              <div className="st__n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="st__out"><small>output</small><b>{out}</b></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}