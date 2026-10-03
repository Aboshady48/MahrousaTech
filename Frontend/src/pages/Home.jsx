import Hero from '../components/Hero'
import LogoRow from '../components/LogoRow'
import ServiceCards from '../components/ServiceCards'
import AccessMap from '../components/AccessMap'
import Steps from '../components/Steps'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoRow />
      <ServiceCards />
      <AccessMap />
      <Steps />
      <Faq />
      <Cta />
    </>
  )
}