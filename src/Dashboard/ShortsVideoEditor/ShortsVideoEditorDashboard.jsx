

import React, { useEffect, useMemo, useState } from "react";
import { Play, Pause, Type, Volume2, Image as ImageIcon, Wand2, Mic2 } from "lucide-react";


const ShortsVideoEditorDashboard = () => {
  const [caption, setCaption] = useState("How to stay productive while working from home");
  const [isPlaying, setIsPlaying] = useState(false);
  const [t, setT] = useState(0);
  const duration = 12.0;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setT((x) => (x + 0.1 >= duration ? (clearInterval(id), setIsPlaying(false), duration) : x + 0.1));
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying]);

  const tLabel = useMemo(() => fmt(t), [t]);

  function handleGenerateAI(kind) {
    // Hook these to your backend: kind = 'media' | 'caption' | 'audio'
    console.log("trigger AI:", kind, caption);
  }

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="max-w-6xl px-4 py-6 mx-auto md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold tracking-wide">247WEB.AI</div>
          <h1 className="text-2xl font-extrabold md:text-4xl">SHORTS VIDEO EDITOR</h1>
          <div className="w-24" />
        </div>

        {/* Main row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left toolbar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4 flex gap-4">
              {/* Vertical icons */}
              <div className="flex flex-col items-center gap-6 pr-4 border-r border-white/10">
                <button className="tool-icon" title="Media"><ImageIcon className="w-5 h-5" /></button>
                <button className="tool-icon" title="Text"><Type className="w-5 h-5" /></button>
                <button className="tool-icon" title="Audio"><Volume2 className="w-5 h-5" /></button>
              </div>

              {/* AI buttons */}
              <div className="grid flex-1 grid-cols-1 gap-3">
                <AIBtn label="AI Media" onClick={() => handleGenerateAI('media')} />
                <AIBtn label="AI Caption" onClick={() => handleGenerateAI('caption')} />
                <AIBtn label="AI Audio" onClick={() => handleGenerateAI('audio')} />
              </div>
            </div>
          </aside>

          {/* Preview */}
          <section className="lg:col-span-2">
            <div className="mx-auto w-[320px] md:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
              <div className="relative h-full">
                <img src="/mnt/data/5.png" alt="preview" className="absolute inset-0 object-cover w-full h-full" />
                {/* caption overlay */}
                <div className="absolute left-0 right-0 px-5 text-center bottom-20">
                  <div className="inline-block px-3 py-2 text-lg font-medium text-white rounded-md bg-black/40 backdrop-blur">
                    {caption}
                  </div>
                </div>
                {/* play button */}
                <div className="absolute left-0 right-0 flex items-center justify-center gap-3 bottom-5">
                  <button
                    className="inline-flex items-center justify-center rounded-full h-11 w-11 bg-white/10 ring-1 ring-white/20"
                    onClick={() => setIsPlaying((p) => !p)}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Timeline editor */}
        <div className="mt-8 rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
          <div className="mb-3 text-sm text-white/80">{caption}</div>

          <div className="flex items-center gap-3">
            {/* thumb */}
            <div className="w-16 h-12 overflow-hidden rounded-md ring-1 ring-white/10 bg-black/40">
              <img src="/mnt/data/5.png" alt="thumb" className="object-cover w-full h-full" />
            </div>

            {/* caption track */}
            <div className="flex-1">
              <div className="rounded-xl bg-[#5b2a8d]/60 ring-1 ring-white/10 px-3 py-2 text-sm flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-white/40" />
                <input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
              {/* timeline progress */}
              <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white/70" style={{ width: `${(t / duration) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tool-icon { @apply inline-flex items-center justify-center h-10 w-10 rounded-md bg-black/30 ring-1 ring-white/10 hover:ring-blue-400; }
      `}</style>
    </div>
  );
}

export default ShortsVideoEditorDashboard

function AIBtn({ label, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-between px-3 py-3 text-sm rounded-md bg-black/30 ring-1 ring-white/10 hover:ring-blue-400">
      <span>{label}</span>
      <Wand2 className="w-4 h-4" />
    </button>
  );
}

function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(m)}:${pad(sec)}`;
}

