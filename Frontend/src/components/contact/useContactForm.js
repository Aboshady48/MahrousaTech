import { useState } from 'react'

const INITIAL_VALUES = { name: '', email: '', company: '', message: '' }
const DEFAULT_ERROR = "Your message didn't send. Check your connection and try again."

// Empty in development (Vite proxy handles /api). In production set
// VITE_API_URL to your backend URL, e.g. https://api.yourdomain.com
const API_URL = import.meta.env.VITE_API_URL ?? ''

async function sendMessage(values) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || DEFAULT_ERROR)
  }
}

export default function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    try {
      await sendMessage(values)
      setValues(INITIAL_VALUES)
      setStatus('sent')
    } catch (err) {
      // fetch() network failures throw TypeError with a technical message
      setErrorMessage(err instanceof TypeError ? DEFAULT_ERROR : err.message)
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return { values, status, errorMessage, handleChange, handleSubmit, reset }
}