import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, Type, RotateCcw } from "lucide-react";

export default function AudioWaveformPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(2);
  const [duration] = useState(5);
  const [playbackPosition, setPlaybackPosition] = useState(40); // percentage

  // Generate waveform data - heights and colors
  const waveformBars = [
    { height: 60, color: "bg-blue-500" },
    { height: 80, color: "bg-blue-600" },
    { height: 45, color: "bg-purple-500" },
    { height: 70, color: "bg-purple-600" },
    { height: 35, color: "bg-blue-500" },
    { height: 90, color: "bg-blue-600" },
    { height: 55, color: "bg-blue-500" },
    { height: 75, color: "bg-purple-500" },
    { height: 40, color: "bg-blue-600" },
     { height: 45, color: "bg-purple-500" },
    { height: 70, color: "bg-purple-600" },
    { height: 35, color: "bg-blue-500" },
    { height: 90, color: "bg-blue-600" },
    { height: 55, color: "bg-blue-500" },
    { height: 75, color: "bg-purple-500" },
    { height: 40, color: "bg-blue-600" },
        { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },
     { height: 55, color: "bg-teal-500" },
         { height: 75, color: "bg-purple-500" },
    { height: 40, color: "bg-blue-600" },
        { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },

  ];

  const lowerWaveformBars = [
    { height: 40, color: "bg-purple-500" },
    { height: 55, color: "bg-teal-500" },
    { height: 35, color: "bg-teal-600" },
    { height: 45, color: "bg-blue-500" },
    { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },
     { height: 55, color: "bg-teal-500" },
    { height: 35, color: "bg-teal-600" },
    { height: 45, color: "bg-blue-500" },
    { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },
        { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },
     { height: 55, color: "bg-teal-500" },
    { height: 35, color: "bg-teal-600" },
    { height: 45, color: "bg-blue-500" },
    { height: 60, color: "bg-teal-500" },
    { height: 50, color: "bg-teal-600" },
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    const newTime = Math.min(currentTime + 1, duration);
    setCurrentTime(newTime);
    setPlaybackPosition((newTime / duration) * 100);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds);
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Simulate playback progress
  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = Math.min(prev + 0.1, duration);
          setPlaybackPosition((newTime / duration) * 100);
          return newTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  return (
    <div className="w-full p-4 mx-auto bg-gray-900 rounded-xl">
      {/* Top Controls and Timer */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlayPause}
            className="text-white transition-colors hover:text-blue-400"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={skipForward}
            className="text-white transition-colors hover:text-blue-400"
          >
            <SkipForward size={20} />
          </button>

          <div className="font-mono text-sm text-white">
            {formatTime(Math.floor(currentTime))} / {formatTime(duration)}
          </div>
        </div>

          <div className="flex items-end h-16 mb-2 space-x-1">
          {waveformBars.map((bar, index) => (
            <div
              key={`upper-${index}`}
              className={`${bar.color} rounded-sm transition-all duration-200 hover:opacity-80`}
              style={{
                height: `${bar.height}%`,
                width: "32px",
                opacity: index * 11 < playbackPosition ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Waveform Display */}
 

      {/* Bottom Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="text-white transition-colors hover:text-blue-400">
            <Type size={18} />
          </button>
          <button className="text-white transition-colors hover:text-blue-400">
            <RotateCcw size={18} />
          </button>
        </div>
        <div className="flex items-end space-x-1 h-14">
          {lowerWaveformBars.map((bar, index) => (
            <div
              key={`lower-${index}`}
              className={`${bar.color} rounded-sm transition-all duration-200 hover:opacity-80`}
              style={{
                height: `${bar.height}%`,
                width: "48px",
                opacity: index * 16.6 + 50 < playbackPosition ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
