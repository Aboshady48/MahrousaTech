import './About.css'

const POINTS = [
  {
    title: 'One team, two disciplines',
    text: 'Identity and access management and custom development under one roof, so security and software are planned together.',
  },
  {
    title: 'Built around your environment',
    text: 'We start from the systems, people and constraints you already have, not from a fixed product.',
  },
  {
    title: 'Clear, steady delivery',
    text: 'Agreed scope, regular demos and plain-language reporting from the first call to launch.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__intro">
          <div className="eyebrow">About Al-Mahrousa</div>
          <h2>A technology partner for secure, well-run organizations</h2>
          <p>
            Al-Mahrousa works in two connected areas. Identity and access
            management keeps the right people connected to the right systems.
            Custom development builds the applications, mobile apps, AI agents
            and services your organization needs to operate.
          </p>
          <p>
            Because we do both, security is not added at the end. The software
            we build respects the access rules we help you define.
          </p>
        </div>

        <ol className="about__points">
          {POINTS.map(({ title, text }, i) => (
            <li className="about__point" key={title}>
              <span className="about__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}