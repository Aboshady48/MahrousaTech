const CHALLENGES = [
  {
    title: 'Too many accounts, unclear access',
    text: 'Permissions pile up as people join, move and leave, and nobody can say with confidence who can reach what.',
  },
  {
    title: 'Slow, manual audits',
    text: 'Proving who had access, and who approved it, means chasing spreadsheets and screenshots.',
  },
  {
    title: 'Disconnected systems',
    text: 'Each application manages its own users, so rules are applied inconsistently and offboarding is easy to miss.',
  },
  {
    title: 'Security that slows people down',
    text: 'Controls that get in the way of daily work tend to be worked around, and then they protect nothing.',
  },
]

export default function Challenges() {
  return (
    <section className="section sol-challenges">
      <div className="container">
        <h2>Problems we help solve</h2>
        <p className="lead">
          Access problems tend to grow quietly over time. These are the common
          ones.
        </p>

        <ul className="sol-challenges__grid">
          {CHALLENGES.map(({ title, text }, i) => (
            <li key={title} className="sol-challenge">
              <span className="sol-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}