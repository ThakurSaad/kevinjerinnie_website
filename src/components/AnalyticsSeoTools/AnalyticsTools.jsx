import React from "react";
import centerImage from "../../assets/kevin videos/analytics/analytics.png"; 

const AnalyticsTools = () => {
  const tools = [
    { title: "AI Content Writing", color: "bg-purple-100 text-purple-600" },
    { title: "AI Image Generator", color: "bg-orange-100 text-orange-600" },
    { title: "AI Chat Bot", color: "bg-teal-100 text-teal-600" },
    { title: "Speech to Text", color: "bg-red-100 text-red-600" },
    { title: "Generate Text to Audio", color: "bg-blue-100 text-blue-600" },
    { title: "AI Code Generator", color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-blue-50">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Analytics & <span className="text-blue-500">SEO</span> Tools
        </h2>
        <p className="text-sm text-gray-500">Know What’s Working</p>
        <button className="px-6 py-2 mt-6 font-medium text-white transition bg-blue-500 rounded-full hover:bg-blue-600">
          Create Now
        </button>
      </div>

      {/* Center Illustration */}
      <div className="flex items-center justify-center ">
        <img src={centerImage} alt="" />
       
      </div>
    </div>
  );
};

export default AnalyticsTools;
