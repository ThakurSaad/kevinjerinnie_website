import React from "react";
import ImageToVideoHero from "../../components/imageToVideo/ImageToVideoHero";
import ImageToVideoBanner from "../../components/imageToVideo/ImageToVideoBanner";
import TrustedByCreators from "../../components/trustedByCreators/TrustedByCreators";
import WantToKnowMore from "../../components/wantToKnowMore/WantToKnowMore";

const ImageToVideo = () => {
  return (
    <div>
      <ImageToVideoHero />
      <ImageToVideoBanner />
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  );
};

export default ImageToVideo;
