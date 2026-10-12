import './Industries.css'

const INDUSTRIES = [
  { name: 'Financial services', text: 'Strict access controls and audit trails around sensitive data.' },
  { name: 'Healthcare', text: 'Protecting patient and operational systems while keeping staff productive.' },
  { name: 'Government & public sector', text: 'Accountable access and secure digital services.' },
  { name: 'Education', text: 'Managing access for students, staff and partners at scale.' },
  { name: 'Retail & e-commerce', text: 'Secure customer-facing platforms and efficient internal tools.' },
  { name: 'Technology & SaaS', text: 'Identity foundations and custom features for growing products.' },
]

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="eyebrow">Industries</div>
        <h2 className="ind__title">Industries where our work fits</h2>
        <p className="lead">
          Whatever your sector, the questions are similar: who needs access,
          what do you need to build, and how do you stay in control?
        </p>

        <ul className="ind__grid">
          {INDUSTRIES.map(({ name, text }) => (
            <li className="ind__item" key={name}>
              <h3>{name}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}