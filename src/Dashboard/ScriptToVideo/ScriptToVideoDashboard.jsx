import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Play,
  Pause,
  Upload,
  ChevronDown,
  Volume2,
  Undo2,
  Redo2,
  Share2,
  MoreHorizontal,
} from "lucide-react";

import videoImage from "../../assets/image/stovideo.png"

const ScriptToVideoDashboard = () => {
  const [prompt, setPrompt] = useState(
    "Young people playing sports at summer camp"
  );
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("Default");
  const [imageName, setImageName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock video/audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(2);
  const [duration] = useState(5);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrentTime((t) => {
        if (t + 0.25 >= duration) {
          clearInterval(id);
          setIsPlaying(false);
          return duration;
        }
        return t + 0.25;
      });
    }, 250);
    return () => clearInterval(id);
  }, [isPlaying, duration]);

  const timeLabel = useMemo(() => {
    const fmt = (n) => n.toFixed(0).padStart(2, "0");
    return `${fmt(currentTime)} / ${fmt(duration)}`;
  }, [currentTime, duration]);

  const handleUpload = (e) => {
    const f = e.target.files?.[0];
    if (f) setImageName(f.name);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen antialiased text-white bg-black">
      {/* Outer frame */}
      <div className="px-4 py-6 mx-auto max-w-8xl md:px-6">
        {/* Header */}

        {/* App Card */}
        <div className="p-4 shadow-2xl rounded-3xl md:p-6 lg:p-8">
          <div className="flex items-center justify-between max-w-5xl pt-10 ">
            <p className="text-3xl">247WEB.AI</p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-6xl md:mb-8">
              SCRIPT TO VIDEO
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Panel */}
            <aside className="lg:col-span-1">
              <div className="p-4 rounded-2xl ring-1 ring-white/10 md:p-5">
                <label htmlFor="prompt" className="sr-only">
                  Script Prompt
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-xl  ring-1 ring-white/10 focus:ring-2 focus:ring-blue-400 outline-none p-4 text-[15px] placeholder-white/50"
                  placeholder="Describe your scene..."
                />

                {/* Upload */}
                <div className="mt-4">
                  <label
                    htmlFor="image-upload"
                    className="inline-flex items-center gap-2 px-3 py-2 cursor-pointer group rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Upload Image</span>
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
                </div>

                {/* Aspect Ratio */}
                <div className="mt-5">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-white/60">
                    Aspect ratio
                  </label>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                    onClick={() => {
                      // simple rotate for demo
                      setAspectRatio((r) =>
                        r === "16:9" ? "9:16" : r === "9:16" ? "1:1" : "16:9"
                      );
                    }}
                    aria-label="Change aspect ratio"
                  >
                    <span className="text-sm">{aspectRatio}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Style */}
                <div className="mt-5">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-white/60">
                    Style
                  </label>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2 text-left rounded-xl ring-1 ring-white/10 hover:ring-blue-400"
                    onClick={() => {
                      setStyle((s) =>
                        s === "Default"
                          ? "Cinematic"
                          : s === "Cinematic"
                          ? "Anime"
                          : "Default"
                      );
                    }}
                    aria-label="Change style"
                  >
                    <span className="text-sm">{style}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Generate */}
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="mt-6 w-full rounded-xl bg-[#0E3AA5] hover:bg-[#1246c5] disabled:opacity-70 disabled:cursor-not-allowed py-3 text-sm font-semibold"
                >
                  {isGenerating ? "Generating…" : "Generate"}
                </button>
              </div>
            </aside>

            {/* Right Panel */}
            <section className="flex flex-col gap-4 lg:col-span-2">
              {/* Video Preview */}
              <div className="relative overflow-hidden bg-black rounded-2xl ring-1 ring-white/10 aspect-video">
                {/* Mock image layer - replace with <video> for real implementation */}
                <img
                  src={videoImage}
                  alt="Preview frame"
                  className="object-cover w-full h-full opacity-95"
                />
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="absolute inline-flex items-center justify-center px-3 py-2 left-4 bottom-4 rounded-xl bg-black/60 backdrop-blur ring-1 ring-white/20 hover:ring-white/40"
                  aria-label={isPlaying ? "Pause preview" : "Play preview"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Audio Player */}
              <div className="rounded-2xl bg-[#0A1530] ring-1 ring-white/10 p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-[#0E1A3D] ring-1 ring-white/10"
                    aria-label={isPlaying ? "Pause audio" : "Play audio"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <div className="min-w-[48px] text-xs tabular-nums text-white/70 select-none">
                    {timeLabel}
                  </div>

                  {/* Waveform stub */}
                  <div className="flex-1">
                    <div className="h-10 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 overflow-hidden relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-white/20"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                        aria-hidden
                      />
                      <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,transparent,transparent_6px,currentColor_6px,currentColor_7px)]" />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2">
                    <button className="icon-btn" aria-label="Undo">
                      <Undo2 className="w-5 h-5" />
                    </button>
                    <button className="icon-btn" aria-label="Redo">
                      <Redo2 className="w-5 h-5" />
                    </button>
                    <button className="icon-btn" aria-label="Volume">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button className="icon-btn" aria-label="Share">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="icon-btn" aria-label="More">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Utility styles for icon buttons */}
      <style>{`
        .icon-btn { @apply inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400; }
      `}</style>
    </div>
  );
};

export default ScriptToVideoDashboard;
