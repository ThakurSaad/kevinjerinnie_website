import React, { useEffect, useMemo, useState } from "react";
import {
  Upload,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2,
  Scissors,
  Type,
  Image as ImageIcon,
  Video as VideoIcon,
  AudioLines,
  Settings2,
  ChevronDown,
} from "lucide-react";
import autovideo from "../../assets/image/autovideo.png";
import autovideo2 from "../../assets/image/autovideo2.png";
import autovideo3 from "../../assets/image/autovideo3.png";

const AutoVideoEditingDashboard = () => {
  // Player state (mock)
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(7.2); // seconds
  const duration = 32.0;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrent((t) => {
        const n = t + 0.2;
        if (n >= duration) {
          clearInterval(id);
          return duration;
        }
        return n;
      });
    }, 200);
    return () => clearInterval(id);
  }, [isPlaying]);

  const timeLabel = useMemo(() => fmtTime(current), [current]);

  // Inspector state
  const [scale, setScale] = useState(100);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [blend, setBlend] = useState("Normal");
  const [opacity, setOpacity] = useState(100);
  const [animIn, setAnimIn] = useState("None");
  const [animOut, setAnimOut] = useState("None");
  const [speed, setSpeed] = useState(100);

  const media = [
    { id: 1, type: "video", name: "Waterfall mp4", src: autovideo2 },
    { id: 2, type: "video", name: "Adorfuel Leeev...", src: autovideo },
    { id: 3, type: "video", name: "Lemur mp4", src: autovideo3 },
    { id: 4, type: "video", name: "Adorfuel Leeev...", src: autovideo },
  ];

  function UploadBtn({ label, icon ,isPrimary = false}) {
    return (
        <button
      className={`w-full flex items-center justify-start gap-2 px-3 py-3 rounded-lg 
        ${isPrimary ? "bg-[#2054ff]" : "bg-[#2054ff]/15"} 
        ring-1 ring-[#2054ff]/40 hover:ring-[#2054ff] text-sm`}
    >
      {icon ?? <Upload className="w-4 h-4" />}
      <span>+ {label}</span>
    </button>
    );
  }

  function Track({ label, color }) {
    return (
      <div className="p-2 rounded-lg ring-1 ring-white/10 bg-black/30">
        <div
          className={`h-10 ${color} rounded-md flex items-center px-3 text-sm`}
        >
          {label}
        </div>
      </div>
    );
  }

  function Clip({ label }) {
    return (
      <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg bg-black/30 ring-1 ring-white/10">
        <div className="h-12 overflow-hidden rounded w-28 bg-black/70 ring-1 ring-white/10">
          <img
            src={autovideo}
            alt="clip"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-xs text-white/80">{label}</div>
      </div>
    );
  }

  function Section({ title, children }) {
    return (
      <div>
        <div className="mb-2 font-medium text-white/80">{title}</div>
        <div className="space-y-3">{children}</div>
      </div>
    );
  }

  function Row({ label, children }) {
    return (
      <div className="text-sm">
        <div className="mb-1 text-white/70">{label}</div>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    );
  }

  function Chip({ children }) {
    return (
      <div className="px-2 py-1 text-xs rounded-md bg-black/40 ring-1 ring-white/10">
        {children}
      </div>
    );
  }

  function SelectLike({ value, onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-between flex-1 px-3 rounded-md h-9 bg-black/40 ring-1 ring-white/10"
      >
        <span className="text-sm">{value}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    );
  }

  function MiniBtn({ label, value, onChange, readOnly }) {
    return (
      <div className="flex items-center gap-1">
        <span className="px-2 py-1 text-xs rounded bg-black/40 ring-1 ring-white/10">
          {label}
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(+e.target.value)}
          readOnly={readOnly}
          className="w-16 px-2 py-1 text-sm rounded outline-none bg-black/40 ring-1 ring-white/10"
        />
      </div>
    );
  }

  function fmtTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.floor(s % 60);
    const pad = (n) => String(n).padStart(2, "0");
    return `${h ? pad(h) + ":" : ""}${pad(m)}:${pad(sec)}`;
  }

  return (
    <div className="min-h-screen bg-[#05070d] text-white antialiased">
      <div className="px-4 py-6 mx-auto max-w-8xl md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-10 mb-5">
          <div className="text-lg font-semibold tracking-wide">247WEB.AI</div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            AUTO VIDEO EDITING
          </h1>
          <button className="inline-flex items-center gap-2 text-sm text-white/85 hover:underline">
            Export <span className="inline-block rotate-180">↪</span>
          </button>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Left rail */}
          <aside className="col-span-12 md:col-span-2">
            <div className="space-y-3">
              <UploadBtn label="Upload Image" isPrimary={true} />
              <UploadBtn
                label="Upload Video"
                icon={<VideoIcon className="w-4 h-4" />}
              />
              <UploadBtn
                label="Upload Audio"
                icon={<AudioLines className="w-4 h-4" />}
              />
              <div className="p-4 text-sm border rounded-xl border-white/10 bg-black/20 text-white/70">
                Drop files here to import
              </div>
            </div>

            {/* Media rail */}
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3 text-sm text-white/70">
                <button className="px-2 py-1 rounded-md bg-white/10">
                  All
                </button>
                <button className="px-2 py-1 rounded-md bg-black/30">
                  Images
                </button>
                <button className="px-2 py-1 rounded-md bg-black/30">
                  Videos
                </button>
              </div>
              <div className="flex flex-wrap">
                {media.map((m) => (
                  <div key={m.id} className="flex items-center gap-3">
                    <div>
                      <div className="w-20 h-16 overflow-hidden bg-black rounded-md ring-1 ring-white/10">
                      <img
                        src={m.src}
                        alt={m.name}
                        className="object-cover w-full h-full"
                      />
                      
                    </div>
                    <div className="text-xs truncate text-white/80">
                     <p className="text-white">{m.name}</p>
                     
                    </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </aside>

          {/* Center editor */}
          <main className="col-span-12 md:col-span-7">
            {/* Tabs */}
            <div className="flex items-center gap-4 mb-3 text-sm">
              {"Media Text Stickers Effects Transitions AI Tools Audio"
                .split(" ")
                .map((t) => (
                  <button key={t} className="text-white/85 hover:text-white">
                    {t}
                  </button>
                ))}
            </div>

            {/* Preview */}
            <div className="overflow-hidden bg-black rounded-xl ring-1 ring-white/20">
              <div className="p-2">
                <div className="relative overflow-hidden rounded-lg ring-1 ring-white/20">
                  <img
                    src={autovideo}
                    alt="preview"
                    className="w-full h-[260px] object-cover"
                  />
                  {/* Player controls */}
                  <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-0.5 rounded">
                    {timeLabel}
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pt-2">
                  <div className="flex items-center gap-2">
                    <button className="icon-btn">
                      <SkipBack className="w-4 h-4" />
                    </button>
                    <button
                      className="icon-btn"
                      onClick={() => setIsPlaying((p) => !p)}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                    <button className="icon-btn">
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="icon-btn">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Timeline scrub */}
              <div className="px-3 pb-3">
                <div className="h-[3px] bg-white/15 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white"
                    style={{ width: `${(current / duration) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Clip tools + timeline */}
            <div className="flex items-center gap-3 mt-3 text-sm text-white/90">
              <button className="tool-btn" title="Split">
                <Scissors className="w-4 h-4" />
              </button>
              <button className="tool-btn" title="Media">
                <ImageIcon className="w-4 h-4" />
              </button>
              <button className="tool-btn" title="Text">
                <Type className="w-4 h-4" />
              </button>
              <button className="tool-btn" title="Audio">
                <AudioLines className="w-4 h-4" />
              </button>
              <span className="ml-1 text-white/70">+ Add to scene</span>
            </div>

            {/* Timeline rows */}
            <div className="mt-3 space-y-3">
              <Track label="Cut Scene" color="bg-[#1b2a55]" />
              <div className="pl-1">
                <Clip label="Lemur mp4" />
              </div>
            </div>

            {/* Video sizing */}
            <div className="mt-5">
              <div className="mb-2 text-sm text-white/70">Video Sizing</div>
              <div className="flex flex-wrap gap-3">
                {["16:9", "9:16", "1:1", "4:5", "21:9", "Custom size"].map(
                  (s) => (
                    <button
                      key={s}
                      className="px-4 py-2 text-sm rounded-lg bg-black/30 ring-1 ring-white/10 hover:ring-blue-400"
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </div>
          </main>

          {/* Inspector */}
          <aside className="col-span-12 md:col-span-3">
            <div className="p-4 space-y-5 rounded-2xl ring-1 ring-white/10 bg-black/30">
              <Section title="Position & Size">
                <Row label="Scale">
                  <Chip>{scale}%</Chip>
                </Row>
                <Row label="Position">
                  <div className="grid grid-cols-3 gap-2">
                    <MiniBtn label="X" value={posX} onChange={setPosX} />
                    <MiniBtn label="Y" value={posY} onChange={setPosY} />
                    <MiniBtn label="0" value={0} readOnly />
                  </div>
                </Row>
                <Row label="Rotate">
                  <SelectLike value={`${rotate}°`} />
                </Row>
              </Section>

              <Section title="Blend">
                <Row label="Mode">
                  <SelectLike
                    value={blend}
                    onClick={() =>
                      setBlend((b) => (b === "Normal" ? "Screen" : "Normal"))
                    }
                  />
                </Row>
                <Row label="Opacity">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={opacity}
                    onChange={(e) => setOpacity(+e.target.value)}
                    className="w-full"
                  />
                  <Chip>{opacity}%</Chip>
                </Row>
              </Section>

              <Section title="Animation">
                <Row label="In">
                  <SelectLike
                    value={animIn}
                    onClick={() =>
                      setAnimIn((v) => (v === "None" ? "Fade" : "None"))
                    }
                  />
                </Row>
                <Row label="Out">
                  <SelectLike
                    value={animOut}
                    onClick={() =>
                      setAnimOut((v) => (v === "None" ? "Fade" : "None"))
                    }
                  />
                </Row>
                <Row label="Anat">
                  <input type="range" min={0} max={100} className="w-full" />
                </Row>
              </Section>

              <Section title="Speed">
                <input
                  type="range"
                  min={25}
                  max={200}
                  value={speed}
                  onChange={(e) => setSpeed(+e.target.value)}
                  className="w-full"
                />
              </Section>
            </div>
          </aside>
        </div>
      </div>

      {/* small utilities */}
      <style>{`
        .icon-btn { @apply inline-flex items-center justify-center h-8 w-8 rounded-md bg-black/40 ring-1 ring-white/10 hover:ring-blue-400; }
        .tool-btn { @apply inline-flex items-center justify-center h-8 w-8 rounded-md bg-black/30 ring-1 ring-white/10 hover:ring-blue-400; }
      `}</style>
    </div>
  );
};

export default AutoVideoEditingDashboard;
