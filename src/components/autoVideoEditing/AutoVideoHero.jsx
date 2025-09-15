import { useState, useEffect } from "react";
import { Play, Sparkles, Zap, Clock, Star } from "lucide-react";
import heroimage from "../../assets/kevin videos/auto video editing/first/autovideoedit.gif";

const AutoVideoHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentEffect, setCurrentEffect] = useState(0);

  const effects = [
    { name: "Color Grading", color: "from-blue-400 to-cyan-400" },
    { name: "Transitions", color: "from-purple-400 to-pink-400" },
    { name: "Audio Sync", color: "from-green-400 to-emerald-400" },
    { name: "Effects", color: "from-orange-400 to-red-400" },
  ];

  // Cycle through effects every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEffect((prev) => (prev + 1) % effects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating background elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 bg-blue-200 rounded-full top-20 left-20 mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute w-24 h-24 bg-purple-200 rounded-full top-40 right-20 mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute w-20 h-20 bg-indigo-200 rounded-full bottom-32 left-1/3 mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div> */}

      <div className="container relative z-10 px-6 py-16 mx-auto lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                  Auto
                </span>{" "}
                <span className="text-slate-900">Video</span>
                <br />
                <span className="text-slate-900">Editing</span>
              </h1>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Meet your AI-powered post-production team that transforms your raw
              footage into polished, professional videos in no time. From
              trimming and transitions to music, filters, and effects, our smart
              editor handles it all, so you can stay focused on creating great
              content. No complex software, no wasted hours - just fast,
              effortless video editing.
            </p>


            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-xl group bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Create Now
              </span>
              <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:opacity-100 blur-lg -z-10"></div>
            </button>
          </div>

          {/* right side */}
          <div>
            <img src={heroimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoVideoHero;
