import React, { useState } from 'react'
import { Star, Play, Heart, Users, Zap, Camera } from 'lucide-react'

const testimonials = [
  {
    name: 'Lily H.',
    role: 'Content Creator',
    desc: "It's hands down the best AI video tool I've tried. The auto-captions and hashtag generator are especially helpful for growing my reach. Worth every cent.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Play className="w-5 h-5" />,
    bgColor: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Abigail G.',
    role: 'YouTuber',
    desc: "I use 247web.ai for everything from YouTube Shorts to Instagram Reels. It's become my go-to platform. The editing tools are fast, smart, and never compromised results every time.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    icon: <Heart className="w-5 h-5" />,
    bgColor: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Benjamin U.',
    role: 'Video Editor',
    desc: "The voiceovers sound incredibly realistic. I've used other platforms, but none compare to the audio quality and customization 247web.ai offers. It really gives my content a professional edge.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    icon: <Users className="w-5 h-5" />,
    bgColor: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Grace U.',
    role: 'Influencer',
    desc: "I love how 247web.ai integrates everything in one place. The image and text-to-video features are seamless. It's like having a studio in my browser.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    icon: <Zap className="w-5 h-5" />,
    bgColor: 'from-orange-500 to-red-500',
  },
  {
    name: 'Scarlett N.',
    role: 'Digital Marketer',
    desc: 'From script to final edit, everything flows seamlessly. The AI suggestions have improved my engagement since using their production team!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face',
    icon: <Camera className="w-5 h-5" />,
    bgColor: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Marcus T.',
    role: 'Tech Reviewer',
    desc: "The AI voice cloning feature is absolutely mind-blowing. My audience can't tell the difference between my real voice and the AI version.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    icon: <Play className="w-5 h-5" />,
    bgColor: 'from-teal-500 to-blue-500',
  },
  {
    name: 'Sofia R.',
    role: 'Fitness Coach',
    desc: 'Creating workout videos has never been easier. The automated editing saves me hours every week, and the quality is consistently professional.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    icon: <Heart className="w-5 h-5" />,
    bgColor: 'from-pink-500 to-rose-500',
  },
  {
    name: 'David K.',
    role: 'Entrepreneur',
    desc: 'This platform transformed how I create promotional content. The AI understands context perfectly and delivers exactly what I envision.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Users className="w-5 h-5" />,
    bgColor: 'from-yellow-500 to-orange-500',
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4 ">
      <div className="bg-white rounded-2xl p-6  transition-all duration-300 border border-gray-100 h-full hover:scale-105 cursor-pointer">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">
              {testimonial.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed text-sm italic">
          "{testimonial.desc}"
        </p>

        <div
          className={`w-full h-1 bg-gradient-to-r ${testimonial.bgColor} rounded-full mt-6 opacity-20`}
        ></div>
      </div>
    </div>
  )
}

const TrustedByCreators = () => {
  const [isHovered, setIsHovered] = useState(false)

  const doubledTestimonials = [...testimonials, ...testimonials]

  return (
    <div className=" py-20 ">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${testimonials.length * 320}px);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="mx-auto  !mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Trusted by Creators{' '}
            <span className="text-transparent bg-clip-text bg-[#3b82f6]">
              Worldwide –
            </span>
          </h2>
          <h3 className="text-5xl font-bold text-gray-900 mb-6">
            Hear Their Stories
          </h3>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex transition-transform duration-1000 ease-linear ${
              isHovered ? '' : 'animate-scroll'
            }`}
            style={{
              width: `${doubledTestimonials.length * 320}px`,
            }}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                isActive={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedByCreators
