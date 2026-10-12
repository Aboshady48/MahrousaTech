import { CLIENTS } from '../data/Clients'
import './LogoRow.css'

export default function LogoRow() {
  // No approved logos yet: show nothing instead of empty placeholders
  if (CLIENTS.length === 0) return null

  return (
    <section className="logorow" aria-labelledby="logorow-title">
      <div className="container">
        <h2 id="logorow-title" className="logorow__title">
          Organizations we work with
        </h2>

        <ul className="logorow__list">
          {CLIENTS.map(({ name, logo, href }) => {
            const img = <img src={logo} alt={href ? '' : name} loading="lazy" />
            return (
              <li key={name}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}