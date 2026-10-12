import Hero from '../components/Hero'
import LogoRow from '../components/LogoRow'
import About from '../components/About'
import Offerings from '../components/Offerings'
import Industries from '../components/Industries'
import Steps from '../components/Steps'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoRow />
      <About />
      <Offerings />
      <Industries />
      <Steps />
      <Faq />
      <Cta />
    </>
  )
}