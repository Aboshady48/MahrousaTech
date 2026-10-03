import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__row">
        <Link to="/" className="logo">AL-MAHROUSA</Link>
        <nav aria-label="Main">
          <ul className="nav__links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/solutions">Solutions</NavLink></li>
            <li><a href="/#industries">Industries</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#resources">Resources</a></li>
          </ul>
        </nav>
        <Link to="/contact" className="btn btn--sm">Contact us</Link>
      </div>
    </header>
  )
}