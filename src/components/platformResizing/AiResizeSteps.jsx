import React from "react";
import image1 from "../../assets/kevin videos/platform resizing/how to use/resizing.png";
import image2 from "../../assets/kevin videos/platform resizing/how to use/resizing2.png";
import image3 from "../../assets/kevin videos/platform resizing/how to use/resizing3.png";

const AiResizeSteps = () => {
  const steps = [
    {
      title: "Drop in Your Video",
      description: "Upload your video straight into 247WEB.AI",
      image: image1, // ✅ directly assign the import
    },
    {
      title: "Instant AI Resizing",
      description: "Let AI instantly reformat your video for TikTok, Reels, Shorts, and more.",
      image: image2,
    },
    {
      title: "Download & Post It",
      description: "Save your resized video and start posting everywhere!",
      image: image3,
    },
  ];

  return (
    <div className="max-w-6xl px-6 py-12 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        How to Use <span className="text-blue-500">AI Resize</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  transition duration-300 bg-white border-[1px] border-blue-600 shadow-md rounded-2xl hover:shadow-lg"
          >
            {/* Image */}
            {step.image && (
              <img
                src={step.image}
                alt={step.title}
                className="object-cover w-full h-40 mb-4 rounded-lg"
              />
            )}

            {/* Title & Description */}
            <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiResizeSteps;
