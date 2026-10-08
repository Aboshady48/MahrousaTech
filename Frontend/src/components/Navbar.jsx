import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__row">
        <Link to="/" className="logo" onClick={close}>AL-MAHROUSA</Link>

        <nav aria-label="Main" className={open ? 'nav__menu is-open' : 'nav__menu'}>
          <ul className="nav__links">
            <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
            <li><NavLink to="/solutions" onClick={close}>Solutions</NavLink></li>
            <li><Link to="/#industries" onClick={close}>Industries</Link></li>
            <li><Link to="/#about" onClick={close}>About</Link></li>
            <li><Link to="/#resources" onClick={close}>Resources</Link></li>
          </ul>
          <Link to="/contact" className="btn btn--sm nav__cta" onClick={close}>Contact us</Link>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}