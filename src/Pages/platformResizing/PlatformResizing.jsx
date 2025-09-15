import React from 'react'
import PlatformResizingHero from '../../components/platformResizing/PlatformResizingHero'
import PlatformUnlesashed from '../../components/platformResizing/PlatformUnlesashed'
import AiResizeSteps from '../../components/platformResizing/AiResizeSteps'
import WhyChooseUs from '../../components/platformResizing/WhyChooseUs'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'

const PlatformResizing = () => {
  return (
    <div >
      <PlatformResizingHero/>
      <PlatformUnlesashed/>
      <AiResizeSteps/>
      <WhyChooseUs/>
      <TrustedByCreators/>
      <WantToKnowMore/>
    </div>
  )
}

export default PlatformResizing
