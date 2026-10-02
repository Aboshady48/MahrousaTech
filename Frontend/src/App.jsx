import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 24, padding: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}