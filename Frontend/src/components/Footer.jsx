import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container footer__grid">
        <div className="logo">AL-MAHROUSA</div>
        <div>
          <h4>Solutions</h4>
          <Link to="/solutions">Identity &amp; access management</Link>
          <Link to="/solutions">Governance &amp; compliance</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/#about">About</Link>
          <Link to="/#resources">Resources</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <h4>Contact us</h4>
          <Link to="/contact">Email</Link>
          <Link to="/contact">LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}