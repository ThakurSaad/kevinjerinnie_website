import NextLevel from '../../components/scriptToVideo/NextLevel'
import ScriptToVideoHeroSection from '../../components/scriptToVideo/ScriptToVideoHeroSection'
import TryOutOur from '../../components/scriptToVideo/TryOutOur'
import WhyChoose from '../../components/scriptToVideo/WhyChoose'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'

const ScriptToVideo = () => {
  return (
    <div>
      <ScriptToVideoHeroSection />
      <WhyChoose />
      <NextLevel />
      <TrustedByCreators />
      <TryOutOur />
      <WantToKnowMore />
    </div>
  )
}

export default ScriptToVideo
