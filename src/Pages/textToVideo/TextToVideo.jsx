import React from "react";
import ScriptToVideoHeroSection from "../../components/scriptToVideo/ScriptToVideoHeroSection";
import WhyChoose from "../../components/scriptToVideo/WhyChoose";
import TextToVideoModels from "../../components/textToVideo/TextToVideoModels";
import TextToVideoClip from "../../components/textToVideo/TextToVideoClip";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";

const TextToVideo = () => {
  return (
    <div>
      <ScriptToVideoHeroSection />
      <WhyChoose />
      <TextToVideoModels />
      <TextToVideoClip />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default TextToVideo;
