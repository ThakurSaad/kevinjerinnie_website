import React from "react";
import Realistic from "../../components/realisticVoiceover/Realistic";
import Experience from "../../components/realisticVoiceover/Experience";
import SubscriptionPlan from "../../components/subscriptionPlan/SubscriptionPlan";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";
import AudioVideoGuide from "../../components/realisticVoiceover/AudioVideoGuide";
// import AiVideoClipHero from "../../components/aiVideoClip/aiVideoClipHero";
import RealisticVoices from "../../components/realisticVoiceover/RealisticVoices";

const RealisticVoiceover = () => {
  return (
    <div>
      <Realistic />
      <RealisticVoices />
      <Experience />
      <SubscriptionPlan />
      <AudioVideoGuide/>
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default RealisticVoiceover;
