import { useState } from "react";
import { Play } from "lucide-react";

const  TextToVideoGenerator =()=> {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-black">
      {/* Header */}
      <h1 className="mb-8 text-3xl font-bold">
        Text-to-Video Generator
      </h1>

      <div className="flex flex-col w-full max-w-5xl gap-6 md:flex-row">
        {/* Left Section */}
        <div className="flex-1 p-6 bg-gray-900 border border-gray-700 rounded-xl">
          <p className="mb-4 text-sm text-blue-300">
            Give me a topic, premise and detailed instructions in any language
            <br />
            or drag & drop your script
          </p>

          {/* Check Options */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              AI Rewrite
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              Smart Scene
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              Brand Colors
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              Stock Footage
            </label>
          </div>

          {/* Button */}
          <button className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Generate a Video
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center flex-1 p-6 bg-gray-900 border border-gray-700 rounded-xl">
          <button className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full hover:bg-gray-700">
            <Play size={28} fill="white" />
          </button>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="w-48 mt-6 accent-blue-500"
          />
        </div>
      </div>

      {/* Video Types */}
      <div className="w-full max-w-5xl mt-10">
        <h2 className="mb-4 text-lg font-semibold">VIDEO TYPES</h2>

        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4 lg:grid-cols-5">
          {[
            "Create Short Video",
            "Make Explainer",
            "Create Animated Fl",
            "Use My Script",
            "Make Audiogram",
            "Social Clip",
            "Reel/Story",
            "Multi-Language",
          ].map((type, idx) => (
            <button
              key={idx}
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex gap-6 mt-8 text-sm text-gray-400">
        <span className="cursor-pointer hover:text-blue-400">Workflows</span>
        <span className="cursor-pointer hover:text-blue-400">Plugins</span>
      </div>
    </div>
  );
}

export default TextToVideoGenerator;