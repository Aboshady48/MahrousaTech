import {
    User, PenLine, Wrench, Handshake,
    Users, Signpost, ScanFace, CircleUser,
    AppWindow, Cloud, Database, Network, Eye,
  } from 'lucide-react'
  import './AccessMap.css'
  
  const columns = [
    {
      n: '01', title: 'Identities', note: 'Who asks for access?',
      rows: [[User, 'Employees'], [PenLine, 'Contractors & vendors'],
             [Wrench, 'Service & machine accounts'], [Handshake, 'External partners']],
    },
    {
      n: '02', title: 'Permissions', note: 'Where excess access and orphaned accounts pile up.',
      rows: [[Users, 'Roles & groups'], [Signpost, 'Direct entitlements'],
             [ScanFace, 'Privileged access'], [CircleUser, 'Shared accounts']],
    },
    {
      n: '03', title: 'System and data', note: 'What can be reached?',
      rows: [[AppWindow, 'Business applications'], [Cloud, 'Cloud service'],
             [Database, 'Database'], [Network, 'Infrastructure']],
    },
  ]
  
  export default function AccessMap() {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="eyebrow eyebrow--plain">The full picture</div>
          <h2 className="am__title">Who can access what?</h2>
          <p className="lead">
            Between identities and systems sits a layer of permissions, and that is
            where invisible risk builds up.
          </p>
          <div className="am__grid">
            {columns.map((c) => (
              <div className="am__col" key={c.n}>
                <div className="am__n">{c.n}</div>
                <h3>{c.title}</h3>
                <ul>
                  {c.rows.map(([Icon, label]) => (
                    <li key={label}>
                      <Icon size={24} color="var(--teal)" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
                <p>{c.note}</p>
              </div>
            ))}
          </div>
          <div className="am__goal">
            <Eye size={28} color="var(--teal)" aria-hidden="true" />
            The goal: one view of every link between an identity, a permission and a system.
          </div>
        </div>
      </section>
    )
  }