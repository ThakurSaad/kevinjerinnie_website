import { useState, useEffect } from "react";
import { Play, Sparkles, Zap, Clock, Star } from "lucide-react";
import heroimage from "../../assets/kevin videos/background audio/first/back.gif";
import heroBg from "../../assets/herosectionImages/videoclipherobg.png";

const BackgroundAudioHero = () => {
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
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <div className="container relative z-10 px-6 py-16 mx-auto responsive-base-width lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                Background
                <span className="text-blue-600 bg-clip-text">Audio</span> <br />
              </h1>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Set the Mood
            </p>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-xl group bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">Create Now</span>
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

export default BackgroundAudioHero;
