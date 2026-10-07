import './Faq.css'

const defaults = [
  'Which industries do you serve?',
  'Do you work with our existing systems?',
  'How do we start?',
]

export default function Faq({ title = 'FAQ', items = defaults }) {
  return (
    <section className="section">
      <div className="container faq">
        <h2>{title}</h2>
        <div>
          {items.map((q) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>Answer to be confirmed by the Al-Mahrousa team.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}