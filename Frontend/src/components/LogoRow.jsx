import './LogoRow.css'

export default function LogoRow() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <h2>Organizations we work with</h2>
        <div className="logos">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>Client/partner logo - with written approval</div>
          ))}
        </div>
      </div>
    </section>
  )
}