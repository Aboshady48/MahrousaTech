import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const close = () => setOpen(false)

  // Close the menu after any navigation (including browser back/forward)
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  // Close with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__row">
        <Link to="/" className="logo" onClick={close} aria-label="Al-Mahrousa, home">
          <img src="/logo.png" alt="" width="1000" height="125" />
        </Link>

        <nav id="main-nav" className={`nav__menu${open ? ' is-open' : ''}`} aria-label="Main">
          <ul className="nav__links">
            <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
            <li><NavLink to="/custom-development" onClick={close}>Custom development</NavLink></li>
            <li><NavLink to="/solutions" onClick={close}>Solutions</NavLink></li>
            <li><Link to="/#industries" onClick={close}>Industries</Link></li>
            <li><Link to="/#about" onClick={close}>About</Link></li>
            <li><Link to="/#approach" onClick={close}>Approach</Link></li>
          </ul>
          <Link to="/contact" className="btn nav__cta-mobile" onClick={close}>
            Contact us
          </Link>
        </nav>

        <Link to="/contact" className="btn btn--sm nav__cta">Contact us</Link>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}