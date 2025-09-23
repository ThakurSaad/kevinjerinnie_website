import React, { useEffect, useMemo, useState } from "react";
import {
  Upload,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Plus,
} from "lucide-react";
import videoimage from "../../assets/image/imagetovideo.png"

const ImageToVideoDashboard = () => {
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("Cinematic");
  const [imageName, setImageName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [t, setT] = useState(0);
  const duration = 8.0;

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

  const tLabel = useMemo(() => `${duration.toFixed(1)} s`, [duration]);

  function handleUpload(e) {
    const f = e.target.files?.[0];
    if (f) setImageName(f.name);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsGenerating(false);
  }

  return (
    <div className="min-h-screen antialiased text-white bg-black">
      <div className="px-4 py-6 mx-auto max-w-8xl md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold tracking-wide">247WEB.AI</div>
        </div>

        <div className="p-4 shadow-2xl rounded-3xl md:p-6 lg:p-8">
          <div className="flex items-center justify-between max-w-5xl ">
            <p className="text-3xl">247WEB.AI</p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-6xl md:mb-8">
              IMAGE TO VIDEO
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Panel */}
            <aside className="lg:col-span-1">
              <div className="p-4 rounded-2xl ring-1 ring-white/10 md:p-5">
                <div className="mb-3 font-medium text-center">Upload Image</div>

                {/* Dropzone */}
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center h-48 transition-colors cursor-pointer rounded-2xl ring-1 ring-white/10 hover:ring-blue-400"
                >
                  <div className="flex flex-col items-center gap-2 text-white/80">
                    <Upload className="w-6 h-6" />
                    <span>Upload</span>
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
                {imageName && (
                  <div
                    className="mt-2 text-xs truncate text-white/70"
                    title={imageName}
                  >
                    {imageName}
                  </div>
                )}

                {/* Aspect ratio */}
                <div className="mt-6">
                  <div className="mb-2 text-xs tracking-wide uppercase text-white/60">
                    Aspect ratio
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setAspect((a) =>
                        a === "16:9" ? "9:16" : a === "9:16" ? "1:1" : "16:9"
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                  >
                    <span className="text-sm">{aspect}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Style */}
                <div className="mt-4">
                  <div className="mb-2 text-xs tracking-wide uppercase text-white/60">
                    Style
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setStyle((s) =>
                        s === "Cinematic"
                          ? "Default"
                          : s === "Default"
                          ? "Anime"
                          : "Cinematic"
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
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

            {/* Right Panel */}
            <section className="flex flex-col gap-4 lg:col-span-2">
              {/* Main Preview */}
              <div className="overflow-hidden bg-black rounded-2xl ring-1 ring-white/10 max-h-96">
                <img
                  src={videoimage}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Timeline Card */}
              <div className="rounded-2xl bg-[#0A1530] ring-1 ring-white/10 p-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  {/* thumbnail */}
                  <div className="h-24 overflow-hidden bg-black w-44 rounded-xl ring-1 ring-white/10">
                    <img
                      src={videoimage}
                      alt="thumb"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* waveform slider */}
                <div className="flex items-center gap-3 mt-4">
                  <div className="relative flex-1 h-12 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-blue-500/30"
                      style={{ width: `${(t / duration) * 100}%` }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(90deg,transparent,transparent_12px,currentColor_12px,currentColor_13px)]" />
                  </div>
                  <button
                    className="inline-flex items-center justify-center rounded-xl h-12 w-12 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                    aria-label="Add track"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-2 text-sm text-center select-none text-white/70">
                  {tLabel}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToVideoDashboard;

