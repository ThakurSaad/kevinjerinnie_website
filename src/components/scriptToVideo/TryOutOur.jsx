import tryOut from '../../assets/kevin videos/script to video/next level/89699.mp4'
import tryOutImage from '../../assets/kevin videos/script to video/next level/b89f7fed44466a64822142bbafcb1fb2a71cdf6d.jpg'
import React, { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const TryOutOur = () => {
  const [scriptText, setScriptText] = useState('')
  const [videoText, setVideoText] = useState('')

  return (
    <div className="bg-[#DFEBFF]  ">
      <div className='flex responsive-base-width'>
        <section className="bg-[#020A22] py-16 px-4 w-1/2">
          <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Try out our <span className="text-blue-400">free AI</span>
                <br />
                Video Generator
              </h2>
              <p className="text-gray-300 text-lg">
                Edit your video script in any language
              </p>
              <div className="space-y-4">
                <textarea
                  value={scriptText}
                  onChange={(e) => setScriptText(e.target.value)}
                  placeholder="Type your video script"
                  className="w-full h-32 p-4 rounded-lg bg-white border-none outline-none resize-none text-gray-700 placeholder-gray-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium">
                  Create free AI video
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative">
              <video src={tryOut} autoPlay loop muted></video>
            </div>
          </div>
        </section>

        <section className="bg-[#DFEBFF] py-16 px-4 w-1/2">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Text to video</h3>
                <p className="text-gray-300 mb-4">
                  Describe a scene to generate a few seconds of video.
                </p>
                <input
                  type="text"
                  value={videoText}
                  onChange={(e) => setVideoText(e.target.value)}
                  placeholder="Type text"
                  className="w-full p-3 rounded-lg bg-[#2a2a3e] border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <img src={tryOutImage} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TryOutOur
