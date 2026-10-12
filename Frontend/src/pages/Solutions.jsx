import SolutionsHero from '../components/Solutionshero'
import Challenges from '../components/Challenges'
import SolutionAreas from '../components/Solutionareas'
import SolutionsCta from '../components/Solutionscta'
import '../components/Solutions.css'

export default function Solutions() {
  return (
    <>
      <SolutionsHero />
      <Challenges />
      <SolutionAreas />
      <SolutionsCta />
    </>
  )
}