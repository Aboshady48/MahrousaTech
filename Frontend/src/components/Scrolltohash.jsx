import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Makes links like /#industries scroll to the section (even from another
// page, or when clicked twice), and resets scroll on normal page changes.
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return null
}