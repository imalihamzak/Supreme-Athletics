import HeroSection from '../components/HeroSection'
import ProgramOverview from '../components/ProgramOverview'
import FeaturesBenefits from '../components/FeaturesBenefits'
import Testimonials from '../components/Testimonials'
import CommunitySocial from '../components/CommunitySocial'
import CTASection from '../components/CTASection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <HeroSection />
      <ProgramOverview/>
      <FeaturesBenefits />
      <Testimonials />
      <CommunitySocial />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home

