import React from "react";
import NextLevel from "../../components/scriptToVideo/NextLevel";
import AiVideoClipHero from "../../components/aiVideoClip/aiVideoClipHero";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";

const AiVideoClip = () => {
  return (
    <div>
      <AiVideoClipHero />
      <NextLevel />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default AiVideoClip;
