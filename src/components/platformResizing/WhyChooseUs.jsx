import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Smart, Advanced Resizing Technology",
      description:
        "247WEB.AI uses intelligent video analysis to automatically resize your content for various platforms, guaranteeing the best possible viewing experience every time.",
      bg: "bg-blue-500 text-white",
    },
    {
      title: "Simple, User-Friendly Interface",
      description:
        "Designed for ease of use, 247WEB.AI clean and intuitive dashboard makes resizing videos quick and hassle-free no technical skills needed.",
      bg: "bg-[#DFEBFF] text-gray-800",
    },
    {
      title: "Maximize Reach & Improve Accessibility",
      description:
        "By perfectly optimizing videos for each platform, 247WEB.AI helps increase viewer engagement and ensures your content is accessible to everyone, everywhere.",
      bg: "bg-[#DFEBFF] text-gray-800",
    },
  ];

  return (
    <div className="max-w-6xl px-6 py-16 mx-auto">
      {/* Section Title */}
      <h2 className="mb-12 text-3xl font-bold leading-snug text-center md:text-4xl">
        Why Choose <span className="text-blue-500">247WEB.AI</span> for <br />
        AI-Powered Video Resizing?
      </h2>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${feature.bg}`}
          >
            <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
