const stroke = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const SERVICES = [
  {
    title: 'Web applications',
    text: 'Fast, secure web apps, from customer portals and dashboards to full SaaS platforms.',
    tags: ['Portals', 'Dashboards', 'SaaS'],
    icon: (
      <svg {...stroke}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Mobile apps',
    text: 'iOS and Android apps designed for real users, with a native feel and one codebase where it makes sense.',
    tags: ['iOS', 'Android', 'Cross-platform'],
    icon: (
      <svg {...stroke}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: 'Custom AI agents',
    text: 'Agents that handle support, research, document processing and internal workflows, connected to your own data and tools.',
    tags: ['Support agents', 'Automation', 'Knowledge assistants'],
    icon: (
      <svg {...stroke}>
        <rect x="4" y="8" width="16" height="11" rx="3" />
        <path d="M12 8V4M9 13h.01M15 13h.01" />
      </svg>
    ),
  },
  {
    title: 'Applications & services',
    text: 'Backends, APIs and integrations that connect your systems and take repetitive work off your team.',
    tags: ['APIs', 'Integrations', 'Workflows'],
    icon: (
      <svg {...stroke}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="section cd-services">
      <div className="container">
        <h2>What we build</h2>
        <p className="lead">
          One team for the whole product, from the first idea to a system
          running in production.
        </p>

        <ul className="cd-grid">
          {SERVICES.map(({ title, text, tags, icon }) => (
            <li key={title} className="cd-card">
              <span className="cd-card__icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="cd-tags">
                {tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}