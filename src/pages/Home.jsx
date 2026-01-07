import HeroSection from '../components/HeroSection'
import ProgramOverview from '../components/ProgramOverview'
import FeaturesBenefits from '../components/FeaturesBenefits'
import Testimonials from '../components/Testimonials'
import CommunitySocial from '../components/CommunitySocial'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-neutral-900">
      <HeroSection />
      <ProgramOverview/>
      <FeaturesBenefits />
      <Testimonials />
      <CommunitySocial />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home

