import React, { useState } from "react";
import { Play, Check } from "lucide-react";
import image1 from "../../assets/image/small/shortviddeo.png";
import image2 from "../../assets/image/small/makeex.png";
import image3 from "../../assets/image/small/create.png";
import image4 from "../../assets/image/small/usemy.png";
import image5 from "../../assets/image/small/make.png";
import image6 from "../../assets/image/small/social.png";
import image7 from "../../assets/image/small/reel.png";
import image8 from "../../assets/image/small/multilanguage.png";
import workflow from "../../assets/image/small/workflow.png";
import plagins from "../../assets/image/small/plagins.png";


const TextToVideoGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [opts, setOpts] = useState({
    aiRewrite: true,
    brandColors: true,
    smartScene: false,
    stockFootage: false,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0.4);

  function toggle(k) {
    setOpts((o) => ({ ...o, [k]: !o[k] }));
  }

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: call your backend here
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  const videoTypes = [
    { name: "Create Short Video", image: image1 },
    { name: "Make Explainer", image: image2 },
    { name: "Create Animated FI", image: image3 },
    { name: "Use My Script", image: image4 },
    { name: "Make Audiogram", image: image5 },
    { name: "Social Clip", image: image6 },
    { name: "Reel/Story", image: image7 },
    { name: "Multi‑Language", image: image8 },
  ];

  return (
    <div className="min-h-screen mt-20 antialiased text-white bg-black">
      <div className="px-4 py-6 mx-auto md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold tracking-wide">247WEB.AI</div>
          <h1 className="text-2xl font-extrabold md:text-4xl">
            Text‑to‑Video Generator
          </h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left: Prompt + options */}
          <div>
            <div className="rounded-2xl ring-1 ring-white/10 bg-[#0B1220] p-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                placeholder={
                  "Give me a topic, premise and detailed instructions in any language\n\n or drag & drop your script"
                }
                className="w-full p-4 bg-black outline-none rounded-xl text-cyan-300"
              />

              {/* Options */}
              <div className="flex items-center justify-between mt-4">
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Toggle
                    label="AI Rewrite"
                    checked={opts.aiRewrite}
                    onClick={() => toggle("aiRewrite")}
                  />
                  <Toggle
                    label="Smart Scene"
                    checked={opts.smartScene}
                    onClick={() => toggle("smartScene")}
                  />
                  <Toggle
                    label="Brand Colors"
                    checked={opts.brandColors}
                    onClick={() => toggle("brandColors")}
                  />
                  <Toggle
                    label="Stock Footage"
                    checked={opts.stockFootage}
                    onClick={() => toggle("stockFootage")}
                  />
                </div>
                <div>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="inline-flex items-center justify-center rounded-lg bg-[#2457FF] hover:bg-[#3767ff] disabled:opacity-70 px-4 py-2 text-sm font-semibold"
                  >
                    {isGenerating ? "Generating…" : "Generate a Video"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div>
            <div className="rounded-2xl ring-1 ring-white/10 bg-[#0B1220] p-4 h-full">
              <div className="grid bg-black h-60 rounded-xl place-items-center ring-1 ring-white/10">
                <button className="inline-flex items-center justify-center rounded-full h-14 w-14 bg-white/10 ring-1 ring-white/20">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-6">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-white/70"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Types */}
        <div className="mt-8">
          <div className="mb-3 text-xs tracking-wider text-white/70">
            VIDEO TYPES
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {videoTypes.map((videoType, index) => (
              <button
                key={index}
                className="flex items-center gap-2 rounded-lg bg-[#0B1220] ring-1 ring-white/10 hover:ring-blue-500/60 px-3 py-2 text-sm"
              >
                <img
                  src={videoType.image}
                  alt={videoType.name}
                  className="w-8 h-8 rounded-md"
                />
                <span className="truncate">{videoType.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Row */}
        <div className="grid grid-cols-2 gap-6 mt-10 md:w-1/2">
          <button className="flex items-center gap-2 text-white/80">
            <img src={workflow} alt="" />
            Workflows
          </button>
          <button className="flex items-center gap-2 text-white/80">
           <img src={plagins} alt="" />
            Plugins
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextToVideoGenerator;

function Toggle({ label, checked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={"flex items-center gap-2 rounded-lg px-3 py-2 text-sm "}
      aria-pressed={checked}
    >
      <span
        className={`h-5 w-5 rounded-[4px] grid place-items-center ring-1 ring-white/10 ${
          checked ? "bg-[#0E1A3D]" : "bg-[#0B1220]"
        }`}
      >
        {checked ? <Check className="h-3.5 w-3.5" /> : null}
      </span>
      {label}
    </button>
  );
}
