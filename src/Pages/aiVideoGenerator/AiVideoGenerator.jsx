import CreateViralVideos from '../../components/home/CreateViralVideos'
import Creativity from '../../components/home/Creativity'
import NextLevel from '../../components/scriptToVideo/NextLevel'
import ScriptToVideoHeroSection from '../../components/scriptToVideo/ScriptToVideoHeroSection'
import TryOutOur from '../../components/scriptToVideo/TryOutOur'
import WhyChoose from '../../components/scriptToVideo/WhyChoose'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'
import AiViralVideo from './AiViralVideo'

const AiVideoGenerator = () => {
  return (
    <div>
       <ScriptToVideoHeroSection />
        <AiViralVideo/>
         <Creativity/>
          <TrustedByCreators/>
          <WantToKnowMore/>
      {/* <WhyChoose />
      <NextLevel />
      <TrustedByCreators /> */}
      {/* <TryOutOur /> */}
      {/* <WantToKnowMore /> */}
    </div>
  )
}

export default AiVideoGenerator     



