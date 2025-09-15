import React from "react";
import BackgroundAudioHero from "../../components/backgroundAudio/BackgroundAudioHero";
import SubscriptionPlan from "../../components/subscriptionPlan/SubscriptionPlan";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";
import Back from "../../components/backgroundAudio/Back";

const BackgroundAudio = () => {
  return (
    <div>
      <BackgroundAudioHero />
      <Back />
      <SubscriptionPlan />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default BackgroundAudio;
