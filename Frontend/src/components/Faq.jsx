import './Faq.css'

const items = [
  {
    q: 'What does Al-Mahrousa do?',
    a: 'We help organizations control who can access their systems (identity and access management, governance and integration), and we build custom software: web and mobile apps, AI agents, and backend services.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'Any organization that needs to control access to its systems or needs custom software. Tell us about your sector in the first call and we will explain how we would approach it.',
  },
  {
    q: 'Do you work with our existing systems?',
    a: 'Yes. We start by mapping what you already use and design around it. We recommend replacing something only when there is a clear reason.',
  },
  {
    q: 'Can you build custom software and AI agents?',
    a: 'Yes. We build web and mobile applications, AI agents connected to your own data and tools, and the APIs and services behind them.',
  },
  {
    q: 'How do we start?',
    a: 'Book a short consultation. We will talk through your environment and goals, then suggest a clear next step and scope.',
  },
]

export default function Faq() {
  return (
    <section className="section">
      <div className="container faq">
        <h2>FAQ</h2>
        <div>
          {items.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}