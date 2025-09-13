import React from "react";
import ScriptToVideoHeroSection from "../../components/scriptToVideo/ScriptToVideoHeroSection";
import CreativityCommand from "../../components/autoCaption/creativityCommand";
import StoryToTell from "../../components/autoCaption/StoryToTell";
import SubscriptionPlan from "../../components/subscriptionPlan/SubscriptionPlan";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";

const AutoCaption = () => {
  return (
    <div>
      <ScriptToVideoHeroSection />
      <CreativityCommand />
      <StoryToTell />
      <SubscriptionPlan />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default AutoCaption;
