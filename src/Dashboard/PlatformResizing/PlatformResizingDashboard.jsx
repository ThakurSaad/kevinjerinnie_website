import { Play, Type, SlidersHorizontal, Crop, Sparkles, Image } from "lucide-react";
import facebook from "../../assets/image/facebook.png"
import instagram from "../../assets/image/inst.png"
import tiktok from "../../assets/image/tik.png"
import youtube from "../../assets/image/youtube.png"
import platefromimage from "../../assets/image/platefromimage.png"
import AudioWaveformPlayer from "../../components/platefrom/AudioWaveformPlayer";
import { useState } from "react";

const PlatformResizingDashboard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="items-center min-h-screen px-6 py-10 mt-16 text-white bg-black ">
      {/* Header */}
     
       <div className="flex items-center mb-6 gap-x-40 ">
          <div className="text-lg font-semibold tracking-wide">247WEB.AI</div>
           <h1 className="text-2xl font-extrabold md:text-4xl">
            PLATFORM RESIZING
          </h1>
        </div>

      <div className="flex flex-col w-full md:flex-row">
        {/* Left Panel */}
      

        <div>
            <div className="flex-1 p-6 border-2 border-gray-700 rounded-xl">
          {/* Dropdown */}
          <div>
            <label className="block mb-2 text-sm">Size</label>
            <select className="p-3 my-16 text-white bg-gray-800 border border-gray-600 rounded-lg ">
              <option>1080 X 1920</option>
              <option>720 X 1280</option>
              <option>1920 X 1080</option>
            </select>
          </div>

          {/* Social Icons */}
          <div className="flex justify-around gap-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-14 h-14">
                <img src={facebook} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-red-600 rounded-full w-14 h-14">
                <img src={youtube} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-pink-600 rounded-full w-14 h-14">
                <img src={tiktok} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 w-14 h-14">
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
          {/* ========================== */}
            <div className="w-full max-w-2xl p-4 mt-5 border border-gray-700 rounded-xl">
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

        


      </div>
        </div>

        {/* Right Video Preview */}
        <div className="flex justify-center flex-1">
          <div className="relative w-[400px] h-[500px] rounded-xl overflow-hidden">
            <img
              src={platefromimage}
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
    
        {/* Timeline =========================*/}
        <AudioWaveformPlayer/>
    </div>
  );
}

export default  PlatformResizingDashboard;



