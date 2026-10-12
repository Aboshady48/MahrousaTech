import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/Scrolltohash'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import CustomDevelopment from './pages/CustomDevelopment'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/custom-development" element={<CustomDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}