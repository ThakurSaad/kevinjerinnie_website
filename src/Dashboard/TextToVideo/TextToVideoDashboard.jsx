import React, { useEffect, useMemo, useState } from "react";
import { Upload, ChevronRight, ChevronDown, Play, Pause } from "lucide-react";
import videoImage from "../../assets/image/tovideo.png"

const TextToVideoDashboard = () => {
  const [prompt, setPrompt] = useState(
    "a dog wearing sunglasses, walking on a sandy beach"
  );
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("Cinematic");
  const [isGenerating, setIsGenerating] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [t, setT] = useState(0);
  const duration = 5.0;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setT((x) => {
        const n = x + 0.1;
        if (n >= duration) {
          clearInterval(id);
          setIsPlaying(false);
          return duration;
        }
        return n;
      });
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying]);

  const label = useMemo(() => `${duration.toFixed(1)} s`, [duration]);

  async function handleGenerate() {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="px-4 py-6 mx-auto max-w-8xl md:px-6">
        {/* Header */}
    

        <div className="p-4 shadow-2xl rounded-3xl md:p-6 lg:p-8">
           <div className="flex items-center justify-between max-w-5xl pt-10 ">
            <p className="text-3xl">247WEB.AI</p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-6xl md:mb-8">
              TEXT TO VIDEO
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column */}
            <aside className="lg:col-span-1">
              <div className="p-4 rounded-2xl ring-1 ring-white/10 md:p-5">
                <label
                  htmlFor="prompt"
                  className="block mb-2 text-sm text-white/70"
                >
                  Describe the video you want to create...
                </label>
                <textarea
                  id="prompt"
                  rows={5}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-4 bg-black outline-none resize-none rounded-xl ring-1 ring-white/10 focus:ring-2 focus:ring-blue-400 "
                />

                {/* Upload */}
                <div className="mt-4">
                  <label
                    htmlFor="upload"
                    className="inline-flex items-center gap-2 px-3 py-2 cursor-pointer rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Upload</span>
                  </label>
                  <input id="upload" type="file" className="hidden" />
                </div>

                {/* Aspect ratio */}
                <div className="mt-6">
                  <div className="mb-2 text-xs tracking-wide uppercase text-white/60">
                    Aspect ratio
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                    onClick={() =>
                      setAspect((a) =>
                        a === "16:9" ? "9:16" : a === "9:16" ? "1:1" : "16:9"
                      )
                    }
                    aria-label="Change aspect ratio"
                  >
                    <span className="text-sm">{aspect}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Style */}
                <div className="mt-6">
                  <div className="mb-2 text-xs tracking-wide uppercase text-white/60">
                    Style
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                    onClick={() =>
                      setStyle((s) =>
                        s === "Cinematic"
                          ? "Default"
                          : s === "Default"
                          ? "Anime"
                          : "Cinematic"
                      )
                    }
                    aria-label="Change style"
                  >
                    <span className="text-sm">{style}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="mt-6 w-full rounded-xl bg-[#1341D9] hover:bg-[#2455f1] disabled:opacity-70 py-3 text-sm font-semibold"
                >
                  {isGenerating ? "Generating…" : "Generate"}
                </button>
              </div>
            </aside>
            {/* Right Column */}
            <section className="flex flex-col gap-4 lg:col-span-2">
              {/* Preview */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black max-h-[500px] ">
                <img
                  src={videoImage}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Audio Card */}
              <div className="p-4 rounded-2xl ring-1 ring-white/10">
                <div className="mb-3 text-sm text-center text-white/80">
                  {label}
                </div>
                <div className="rounded-xl bg-[#2E3E9E] h-8 ring-1 ring-white/10 relative overflow-hidden">
                  {/* progress overlay */}
                  <div
                    className="absolute inset-y-0 left-0 bg-white/20"
                    style={{ width: `${(t / duration) * 100}%` }}
                  />
                  {/* simple stripes for waveform feel */}
                  <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)]" />
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="inline-flex items-center justify-center rounded-full h-11 w-11 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToVideoDashboard;
