import { Link } from 'react-router-dom'
import './Footer.css'

const EMAIL = 'info@MahrousaTech.com'
const LINKEDIN_URL = '' // add your company LinkedIn URL; the link stays hidden while empty

const COLUMNS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Access management', to: '/solutions#access-management' },
      { label: 'Governance & compliance', to: '/solutions#governance' },
      { label: 'Integration & delivery', to: '/solutions#integration' },
      { label: 'Custom development', to: '/custom-development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/#about' },
      { label: 'Industries', to: '/#industries' },
      { label: 'Approach', to: '/#approach' },
      { label: 'Contact us', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Al-Mahrousa, home">
            <img src="/logo.png" alt="" width="1000" height="125" />
          </Link>
          <p>
            Identity security and custom software for organizations that need
            to stay in control.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h3 className="footer__heading">{title}</h3>
              <ul className="footer__list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="footer__heading">Contact us</h3>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <Link to="/contact">Send us a message</Link>
              </li>
              {LINKEDIN_URL && (
                <li>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Al-Mahrousa. All rights reserved.</p>
      </div>
    </footer>
  )
}