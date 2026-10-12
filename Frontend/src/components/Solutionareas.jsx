import { KeyRound, ClipboardCheck, Plug, Check } from 'lucide-react'

const AREAS = [
  {
    id: 'access-management',
    icon: KeyRound,
    title: 'Access management',
    summary: 'Make sure the right people have the right access, and nothing more.',
    outcome: 'Least-privilege access that stays accurate as your team changes.',
    included: [
      'Single sign-on and multi-factor authentication',
      'Role-based and least-privilege access models',
      'Joiner, mover and leaver processes',
      'Privileged and administrator access controls',
    ],
  },
  {
    id: 'governance',
    icon: ClipboardCheck,
    title: 'Governance & compliance',
    summary: 'Turn access rules into clear policies, reviews and evidence.',
    outcome: 'Audit-ready evidence without the spreadsheet chase.',
    included: [
      'Periodic access reviews and approvals',
      'Policy definition and approval workflows',
      'Separation-of-duties checks',
      'Audit-ready reporting',
    ],
  },
  {
    id: 'integration',
    icon: Plug,
    title: 'Integration & delivery',
    summary: 'Connect what you already run into one consistent access model.',
    outcome: 'One clear picture of access across cloud and on-premise systems.',
    included: [
      'Integration with your directories and identity providers',
      'Application onboarding, in stages',
      'Cloud and on-premise systems',
      'Migration planning with minimal disruption',
    ],
  },
]

export default function SolutionAreas() {
  return (
    <section className="section sol-areas">
      <div className="container">
        <h2>What we deliver</h2>
        <p className="lead">
          Three connected areas. Start with the one that matters most and add
          the others as you go.
        </p>

        <div className="sol-areas__list">
          {AREAS.map(({ id, icon: Icon, title, summary, outcome, included }) => (
            <article key={title} id={id} className="sol-area">
              <div className="sol-area__intro">
                <span className="sol-area__icon">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{summary}</p>
                <p className="sol-outcome">
                  <small>Outcome</small>
                  {outcome}
                </p>
              </div>

              <ul className="sol-area__included">
                {included.map((item) => (
                  <li key={item}>
                    <Check size={18} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}