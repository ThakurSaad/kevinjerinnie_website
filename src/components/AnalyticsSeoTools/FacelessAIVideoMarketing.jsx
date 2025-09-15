import React from 'react';
import ticklogo from "../../assets/kevin videos/analytics/tick.png"; 


const FacelessAIVideoMarketing = () => {
  return (
    <div className="p-8 responsive-base-width bg-gradient-to-r from-blue-50 to-white ">
      <h1 className="mb-8 text-4xl font-semibold text-center">
        Faceless AI Video Marketing & SEO <br /> Tips – <span className="text-blue-600">247WEB.AI</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-6 bg-white border-2 border-[#327CFE] rounded-lg shadow-lg">
          <div >
            <img src={ticklogo} alt="" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Hook Viewers in 3 Seconds</h2>
          <p className="text-center text-gray-600">
            Start with a bold statement or question. The first 3 seconds decide if they scroll or stay.
            Grab attention instantly – no face needed.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white border-2 border-[#327CFE] rounded-lg shadow-lg">
           <div >
            <img src={ticklogo} alt="" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Ride the Viral Sound Wave</h2>
          <p className="text-center text-gray-600">
            Use trending music or audio clips. It boosts discoverability across TikTok and Reels.
            Let the algorithm work "for" your AI content.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white border-2 border-[#327CFE] rounded-lg shadow-lg">
           <div >
            <img src={ticklogo} alt="" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Captions Are Non-Negotiable</h2>
          <p className="text-center text-gray-600">
            Most people scroll with the sound off. Use big, bold, high-contrast captions.
            They keep viewers engaged from start to finish.
          </p>
        </div>

        {/* <div className="flex flex-col items-center p-6 bg-white border-2 border-[#327CFE] rounded-lg shadow-lg">
           <div >
            <img src={ticklogo} alt="" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Post Fast, Post Often</h2>
          <p className="text-center text-gray-600">
            Create once, then cut it into clips. Push across more platforms to increase your reach.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default FacelessAIVideoMarketing;
