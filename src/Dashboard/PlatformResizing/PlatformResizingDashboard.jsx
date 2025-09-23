import { Play, Type, SlidersHorizontal, Crop, Sparkles, Image } from "lucide-react";

const PlatformResizingDashboard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 text-white bg-black">
      {/* Header */}
      <h1 className="mb-8 text-3xl font-bold">PLATFORM RESIZING</h1>

      <div className="flex flex-col w-full max-w-6xl gap-10 md:flex-row">
        {/* Left Panel */}
        <div className="flex-1 p-6 bg-gray-900 border border-gray-700 rounded-xl">
          {/* Dropdown */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Size</label>
            <select className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-lg">
              <option>1080 X 1920</option>
              <option>720 X 1280</option>
              <option>1920 X 1080</option>
            </select>
          </div>

          {/* Social Icons */}
          <div className="flex justify-around gap-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-14 h-14">
                <i className="text-2xl fab fa-facebook-f"></i>
              </div>
              <span className="mt-2 text-xs text-gray-400">Facebook Reels</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-red-600 rounded-full w-14 h-14">
                <i className="text-2xl fab fa-youtube"></i>
              </div>
              <span className="mt-2 text-xs text-gray-400">YouTube</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-pink-600 rounded-full w-14 h-14">
                <i className="text-2xl fab fa-tiktok"></i>
              </div>
              <span className="mt-2 text-xs text-gray-400">TikTok</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 w-14 h-14">
                <i className="text-2xl fab fa-instagram"></i>
              </div>
              <span className="mt-2 text-xs text-gray-400">Instagram</span>
            </div>
          </div>
        </div>

        {/* Right Video Preview */}
        <div className="flex justify-center flex-1">
          <div className="relative w-72 h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3119174/pexels-photo-3119174.jpeg"
              alt="Preview"
              className="object-cover w-full h-full"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-white rounded-full bg-opacity-80">
                <Play size={30} className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editor Section */}
      <div className="w-full max-w-6xl p-4 mt-10 bg-gray-900 border border-gray-700 rounded-xl">
        {/* Toolbar */}
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
          <button className="flex items-center gap-2 hover:text-blue-400">
            <SlidersHorizontal size={18} /> Transform
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Image size={18} /> Adjust
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Type size={18} /> Text
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Sparkles size={18} /> Filters
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Sparkles size={18} /> Transitions
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Sparkles size={18} /> Animation
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Crop size={18} /> Crop
          </button>
        </div>

        {/* Timeline */}
        <div className="p-4 bg-gray-800 rounded-lg">
          {/* Play bar */}
          <div className="flex items-center gap-3 mb-4">
            <button className="p-1 text-black bg-white rounded-full">
              <Play size={16} />
            </button>
            <span className="text-sm">0:02 / 0:05</span>
            {/* Fake timeline */}
            <div className="flex flex-1 h-2 bg-gray-700 rounded-lg">
              <div className="w-1/5 bg-blue-500 rounded-l-lg"></div>
              <div className="w-1/4 bg-purple-500"></div>
              <div className="w-1/3 bg-teal-500"></div>
              <div className="flex-1 bg-purple-500 rounded-r-lg"></div>
            </div>
          </div>

          {/* Tracks */}
          <div className="flex items-center gap-3">
            <Type size={16} />
            <div className="flex flex-1 h-3 bg-gray-700 rounded-lg">
              <div className="w-1/4 bg-purple-500 rounded-l-lg"></div>
              <div className="w-1/3 bg-teal-500"></div>
              <div className="flex-1 bg-purple-500 rounded-r-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  PlatformResizingDashboard;


