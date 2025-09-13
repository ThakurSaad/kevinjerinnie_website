import NextLevel from '../../components/scriptToVideo/NextLevel'
import ScriptToVideoHeroSection from '../../components/scriptToVideo/ScriptToVideoHeroSection'
import TryOutOur from '../../components/scriptToVideo/TryOutOur'
import WhyChoose from '../../components/scriptToVideo/WhyChoose'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'
import heroBg from "../../assets/herosectionImages/videoclipherobg.png";

const ScriptToVideo = () => {
  return (
    <div 
     style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "top", 
        backgroundRepeat: "no-repeat", 
        // backgroundSize: "cover", 
      }}
    >
      <ScriptToVideoHeroSection />
      <WhyChoose />
      <NextLevel />
      <TrustedByCreators />
      {/* <TryOutOur /> */}
      <WantToKnowMore />
    </div>
  )
}

export default ScriptToVideo
