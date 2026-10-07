import { useState } from 'react'
import { Link } from 'react-router-dom'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import './Solutions.css'

const problems = [
  'Permissions that pile up without review [example]',
  'Difficulty proving compliance during audits [example]',
  'Disconnected systems that don\'t integrate [example]',
]

const scope = ['Assessment', 'Design', 'Implementation & support']
const tabs = ['Assessment', 'Design', 'Implementation']

const standards = [
  ['[needs confirmation]', 'Standard', 'Pending'],
  ['[needs confirmation]', 'Technology', 'Pending'],
  ['[needs confirmation]', 'Technology', 'Pending'],
]

export default function Solutions() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <div className="svc__hero">
        <div className="container svc__hero-inner">
          <div className="svc__left">
            <div className="svc__crumb">
              <Link to="/">Home</Link> / <Link to="/solutions">Solutions</Link> /{' '}
              <b>Identity &amp; access management</b>
            </div>
            <div className="eyebrow">Service [needs confirmation]</div>
            <h1>Identity &amp; access management</h1>
            <p className="lead">
              One-line promise for this service, written for the decision-maker. [needs confirmation]
            </p>
            <div className="row">
              <Link to="/contact" className="btn">Book a consultation</Link>
              <Link to="/solutions" className="btn btn--ghost">Download the brief</Link>
            </div>
          </div>
          <aside className="svc__aside" aria-label="Service summary">
            <h3>Service summary</h3>
            <ul>
              <li>Typical duration: [needs confirmation]</li>
              <li>Outputs: [needs confirmation]</li>
              <li>Engagement model: [needs confirmation]</li>
            </ul>
          </aside>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="eyebrow eyebrow--plain">The challenge</div>
          <h2 className="svc__h2">What problem do we solve?</h2>
          <p className="lead">
            Write the challenge in the decision-maker's language: its impact on risk, cost and compliance.
          </p>
          <div className="svc__list">
            {problems.map((p) => <div key={p}>{p}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow eyebrow--plain">What we deliver</div>
          <h2 className="svc__h2">Service scope</h2>
          <div className="svc__cards">
            {scope.map((s, i) => (
              <article className="svc__card" key={s}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{s}</h3>
                <p>A clear output for this phase. [needs confirmation]</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow eyebrow--plain">Details</div>
          <h2 className="svc__h2">How we work</h2>
          <div className="svc__tabs" role="tablist">
            {tabs.map((t, i) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="svc__panel" role="tabpanel">
            Stage details for {tabs[tab].toLowerCase()}. [needs confirmation]
          </div>

          <h3 className="svc__h3">
            Supported standards and technologies [needs confirmation: list documented ones only]
          </h3>
          <div className="svc__table">
            <table>
              <thead>
                <tr><th>Name</th><th>Type</th><th>Status</th></tr>
              </thead>
              <tbody>
                {standards.map((r, i) => (
                  <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow eyebrow--plain">Evidence</div>
          <h2 className="svc__h2">Case study</h2>
          <div className="svc__case">
            <span>Sector: [needs confirmation]</span>
            <h3>Outcome headline, not project title</h3>
            <p>
              Published only with client approval; the name can be hidden while
              stating sector and size.
            </p>
          </div>
        </div>
      </section>

      <Faq
        title="Questions about this service"
        items={[
          'What does the first phase include?',
          'How long does it usually take?',
          'Do you support our existing tools?',
        ]}
      />
      <Cta />
    </>
  )
}