import CustomDevHero from '../components/custom-dev/CustomDevHero'
import ServicesGrid from '../components/custom-dev/ServicesGrid'
import ProcessSteps from '../components/custom-dev/ProcessSteps'
import CtaBand from '../components/custom-dev/CtaBand'
import '../components/contact/customDev.css'

export default function CustomDevelopment() {
  return (
    <>
      <CustomDevHero />
      <ServicesGrid />
      <ProcessSteps />
      <CtaBand />
    </>
  )
}