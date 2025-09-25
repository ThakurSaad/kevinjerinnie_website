import { useState } from "react";
import { Play, Upload, Search } from "lucide-react";
import audiobg from "../../assets/image/audiobg.png"


const BackgroundAudioDashboard = () => {
  const [genre, setGenre] = useState("Ambient");
  const [mood, setMood] = useState("Calm");

  const tracks = [
    { title: "Tranquil Skies", duration: "2:56" },
    { title: "Dreamlike State", duration: "3:21" },
    { title: "Soothing Tones", duration: "2:47" },
    { title: "Deep Meditation", duration: "3:04" },
  ];

  return (
    <div className="min-h-screen p-8 mt-20 font-sans text-white bg-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 text-2xl font-bold">
        <span>247WEB.AI</span>
        <h1 className="text-3xl font-semibold">Background Audio</h1>
      </div>

      {/* Upload + Search */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row">
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 border border-gray-600 rounded-lg hover:bg-gray-800">
          <Upload size={18} /> Upload Video
        </button>
        <div className="flex items-center w-full px-3 bg-gray-900 border border-gray-600 rounded-lg">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search music..."
            className="w-full px-3 py-2 bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Genre + Mood */}
      <div className="flex flex-col items-center justify-between gap-6 p-6 pt-8 mb-8 pb-36 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl md:flex-row"
       style={{ 
        backgroundImage: `url(${audiobg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
      
      >
        <div>
          <label className="block mb-1 text-sm text-gray-300">Genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-2 text-white bg-black border border-gray-700 rounded-md focus:outline-none"
          >
            <option>Ambient</option>
            <option>Chill</option>
            <option>Classical</option>
            <option>Electronic</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Mood</label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="px-4 py-2 text-white bg-black border border-gray-700 rounded-md focus:outline-none"
          >
            <option>Calm</option>
            <option>Happy</option>
            <option>Energetic</option>
            <option>Sad</option>
          </select>
        </div>
      </div>

      {/* Track List */}
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-4 transition bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <Play size={18} className="text-blue-400 cursor-pointer" />
              <span>{track.title}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-400">{track.duration}</span>
              {/* Fake waveform */}
              <div className="flex gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-[10px] bg-blue-500 rounded-sm"
                    style={{ height: `${Math.random() * 16 + 6}px` }}
                  />
                ))}
              </div>
              <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackgroundAudioDashboard;
