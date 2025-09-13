import React from "react";
import ScriptToVideoHeroSection from "../../components/scriptToVideo/ScriptToVideoHeroSection";
import AiImageClip from "../../components/aiImageGenerator/AiImageClip";
import NextLevel from "../../components/scriptToVideo/NextLevel";
import ImageLevel from "./ImageLevel";
import PayPerVideoPricing from "../../components/payPerVideoPricing/PayPerVideoPricing";
import AddOnOptions from "../../components/addOnOptions/AddOnOptions";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";

const AIImageGenerator = () => {
  return (
    <div>
      <ScriptToVideoHeroSection />
      <AiImageClip />
      <ImageLevel />
      <PayPerVideoPricing />
      <AddOnOptions />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default AIImageGenerator;
