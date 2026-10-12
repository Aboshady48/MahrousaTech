const STEPS = [
  { title: 'Discover', text: 'We learn your goals, users and constraints, then agree on a clear scope.' },
  { title: 'Design', text: 'Wireframes and a plan you can react to before any code is written.' },
  { title: 'Build', text: 'Short iterations with regular demos, so you see progress as it happens.' },
  { title: 'Launch & support', text: 'We deploy, monitor and keep improving the product after release.' },
]

export default function ProcessSteps() {
  return (
    <section className="section cd-process">
      <div className="container">
        <h2>How we work</h2>

        <ol className="cd-steps">
          {STEPS.map(({ title, text }, i) => (
            <li key={title} className="cd-step">
              <span className="cd-step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}