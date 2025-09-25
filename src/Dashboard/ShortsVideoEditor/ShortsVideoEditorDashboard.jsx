import React, { useEffect, useMemo, useState } from "react";
import { Play, Pause, Type, Volume2, Image as ImageIcon, Wand2, Mic2 } from "lucide-react";
import shortvideo from "../../assets/image/shortvideo.png"
import shortvideoprev from "../../assets/image/shortvideoprev.png"
import shortvideoleft from "../../assets/image/shortvideoleft.png"




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



  return (
    <div className="mt-16 text-white bg-black ">
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
           <img src={shortvideoleft} alt="" />
          </aside>

          {/* Preview */}
          <section className="lg:col-span-2">
            <div className="mx-auto w-[300px] md:w-[360px] h-[550px] aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
              <div className="relative h-[500px]">
                <img src={shortvideo} alt="preview" className="absolute inset-0 object-cover w-full h-full" />
                {/* caption overlay */}
                {/* <div className="absolute left-0 right-0 px-5 text-center bottom-20">
                  <div className="inline-block px-3 py-2 text-lg font-medium text-white rounded-md bg-black/40 backdrop-blur">
                    {caption}
                  </div>
                </div> */}
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
          

          <div className="flex items-center gap-3">
            {/* thumb */}
            <div className="w-16 h-20 overflow-hidden rounded-md ring-1 ring-white/10 bg-black/40">
              <img src={shortvideoprev} alt="thumb" className="object-cover w-full h-full" />
            </div>

            {/* caption track */}
            <div className="flex-1">
              <div className="flex justify-center">
                <div className="mb-3 text-sm text-white/80">{caption}</div>
              </div>
              <div className="rounded-xl bg-[#5b2a8d]/60 ring-1 ring-white/10 px-3 py-2 text-sm flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-white/40" />
                <input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
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

