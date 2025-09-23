import React from "react";
import { Zap, Sparkles, Palette } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#071128] flex flex-col items-center justify-center text-white px-4 text-center">
      {/* Heading */}
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        Welcome to the Next-Gen <br className="hidden md:block" /> AI Video
        Platform!
      </h1>

      {/* Subheading */}
      <p className="max-w-2xl mb-10 text-base md:text-lg text-white/70">
        Select a tool from the sidebar to get started, or try our guided tour.
      </p>

      {/* Features */}
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2">
          <Zap className="w-8 h-8 text-yellow-400" />
          <span className="font-medium">Fastest Render</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Sparkles className="w-8 h-8 text-blue-400" />
          <span className="font-medium">Most Powerful AI</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Palette className="w-8 h-8 text-indigo-400" />
          <span className="font-medium">Unlimited Design</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
