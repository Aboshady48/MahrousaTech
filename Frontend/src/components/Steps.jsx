import { Eye, FileText, KeyRound, RotateCcw } from 'lucide-react'
import './Steps.css'

const steps = [
  { icon: Eye, title: 'Discover', text: 'Understand your goals, systems and constraints before anything is built.', out: 'Scope & plan' },
  { icon: FileText, title: 'Design', text: 'Define the approach and prioritize by business impact.', out: 'Roadmap & priorities' },
  { icon: KeyRound, title: 'Deliver', text: 'Roll out in stages with regular demos, without disrupting daily work.', out: 'Working releases' },
  { icon: RotateCcw, title: 'Sustain', text: 'Monitor, review and improve after launch, on a schedule.', out: 'Reports & ongoing support' },
]

export default function Steps() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <div className="eyebrow eyebrow--plain">Approach</div>
        <h2 className="st__title">From first conversation to lasting results</h2>
        <p className="lead">
          The same four stages apply to a security program and to a software
          build. Each cycle starts from what the last one taught us.
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