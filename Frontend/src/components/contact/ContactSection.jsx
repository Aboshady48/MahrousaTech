import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import './contact.css'

export default function ContactSection() {
  return (
    <section className="section contact">
      <div className="contact__inner">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}