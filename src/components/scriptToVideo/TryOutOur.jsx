import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles, Zap, Video, Wand2 } from 'lucide-react'

const TryOutOur = () => {
  const [scriptText, setScriptText] = useState('')
  const [videoText, setVideoText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 2
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  const handleScriptTyping = (e) => {
    setScriptText(e.target.value)
    setIsTyping(true)
    setTimeout(() => setIsTyping(false), 1000)
  }

  const handleVideoTyping = (e) => {
    setVideoText(e.target.value)
  }

  return (
    <div className="relative min-h-screen bg-[#DFEBFF] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}

      <div className="relative z-10 flex min-h-screen">
        {/* Left Section - AI Video Generator */}
        <section className="relative w-1/2 flex items-center justify-center p-8 overflow-hidden">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-sm"></div>
          
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse"></div>
          <div className="absolute inset-[2px] bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-lg"></div>
          
          <div className="relative z-10 w-full max-w-lg space-y-8">
            {/* Header with Icons */}
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-200">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="p-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-bounce delay-400">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Try our <span className="relative">
                  <span className="animate-pulse">FREE AI</span>
                  <div className="absolute -top-2 -right-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                </span>
                <br />
                Video Generator
              </h2>
              
              <p className="text-gray-300 text-lg font-medium">
                Transform your ideas into stunning videos with AI magic ✨
              </p>
            </div>

            {/* Interactive Form */}
            <div className="space-y-6">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition-opacity duration-300 ${isTyping ? 'animate-pulse' : ''}`}></div>
                <textarea
                  value={scriptText}
                  onChange={handleScriptTyping}
                  placeholder="✍️ Type your video script here..."
                  className="relative w-full h-40 p-6 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 outline-none resize-none focus:border-blue-400 transition-all duration-300 font-medium text-lg leading-relaxed"
                />
                {isTyping && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-blue-400 animate-pulse">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">AI Processing...</span>
                  </div>
                )}
              </div>

              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Play className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
                  <span>Create AI Video Magic</span>
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </div>
              </button>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-blue-400">99%</div>
                <div className="text-xs text-gray-400">AI Accuracy</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-purple-400">2M+</div>
                <div className="text-xs text-gray-400">Videos Created</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-pink-400">30s</div>
                <div className="text-xs text-gray-400">Avg. Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Text to Video */}
        <section className="relative w-1/2 flex items-center justify-center p-8">
          <div className="relative w-full max-w-lg">
            {/* Main Card */}
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 animate-pulse"></div>
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Text to Video</h3>
                    <p className="text-gray-400 text-sm">AI-powered video generation</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Describe any scene and watch our AI create stunning visuals in seconds. 
                  From epic landscapes to character animations! 🎬
                </p>

                {/* Input Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <input
                    type="text"
                    value={videoText}
                    onChange={handleVideoTyping}
                    placeholder="🎥 Describe your video scene..."
                    className="relative w-full p-4 rounded-xl bg-black/50 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 transition-all duration-300 font-medium"
                  />
                </div>

                {/* Demo Preview */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Live Preview</span>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-white/60 mx-auto mb-2 hover:text-white transition-colors cursor-pointer" />
                      <p className="text-white/60 text-sm">Your AI video will appear here</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>4K Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>No Watermark</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Instant Export</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Commercial Use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TryOutOur