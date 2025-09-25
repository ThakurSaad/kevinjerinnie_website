import video1 from '../../assets/kevin videos/landing page/hero page videos/1.mp4'
import video2 from '../../assets/kevin videos/landing page/hero page videos/2.mp4'
import video3 from '../../assets/kevin videos/landing page/hero page videos/3.mp4'
import video4 from '../../assets/kevin videos/landing page/hero page videos/4.mp4'
import video5 from '../../assets/kevin videos/landing page/hero page videos/5.mp4'
import video6 from '../../assets/kevin videos/landing page/hero page videos/6.mp4'
import video7 from '../../assets/kevin videos/landing page/hero page videos/7.mp4'
import video8 from '../../assets/kevin videos/landing page/hero page videos/8.mp4'
import video9 from '../../assets/kevin videos/landing page/hero page videos/9.mp4'
import video10 from '../../assets/kevin videos/landing page/hero page videos/10.mp4'
import video11 from '../../assets/kevin videos/landing page/hero page videos/11.mp4'
import video12 from '../../assets/kevin videos/landing page/hero page videos/12.mp4'
import video13 from '../../assets/kevin videos/landing page/hero page videos/13.mp4'
import video14 from '../../assets/kevin videos/landing page/hero page videos/14.mp4'
import video15 from '../../assets/kevin videos/landing page/hero page videos/15.mp4'
import video16 from '../../assets/kevin videos/landing page/hero page videos/16.mp4'
import video17 from '../../assets/kevin videos/landing page/hero page videos/17.mp4'
import video18 from '../../assets/kevin videos/landing page/hero page videos/18.mp4'
import video19 from '../../assets/kevin videos/landing page/hero page videos/19.mp4'
import video20 from '../../assets/kevin videos/landing page/hero page videos/20.mp4'

import heroVideo from '../../assets/MicrosoftTeams-video.mp4'
import { useNavigate } from 'react-router-dom'

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video12,
  video13,
  video14,
  video15,
  video16,
  video17,
  video18,
  video19,
  video20,
]

const HeroPage = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/dashboard/sign-up')
  }

  return (
    <section className="h-screen overflow-hidden ">
      <div className="absolute inset-0 z-1">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-opacity-40"></div>

      <div className="relative h-full z-1">
        <div className="max-w-6xl mx-auto h-[72vh] flex flex-col justify-center">
          <div className="text-6xl font-bold text-center max-w-[900px] w-full mx-auto text-white">
            Turn Your Ideas Into Viral Videos Instantly - with{' '}
            <span className="text-[#1AC5FE]">247web AI</span>
          </div>
          <div className="mt-5 text-gray-300 text-center leading-relaxed text-sm max-w-[900px] w-full mx-auto">
            Unleash your creativity 24/7 with 247web.ai – the AI video generator
            that turns your ideas into viral magic, anytime, anywhere. . Just
            enter your script, caption, or even a simple idea – and AI takes
            care of the rest. From generating a complete video with relevant
            stock footage, animations, and voiceover to adding captions,
            trending hashtags, and background music – everything is handled
            automatically.
          </div>
          <div className="z-10 flex justify-center">
            <button
              onClick={handleGetStarted}
              className="border border-[#1AC5FE] py-3 px-10 rounded-full text-[#1AC5FE] hover:bg-[#1AC5FE] hover:text-black transition duration-300 ease-in-out mt-10 inline-block"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 py-5 overflow-hidden">
        <div className="space-x-10 animate-marquee w-max">
          {videos.map((vid, index) => (
            <video
              key={index}
              src={vid}
              className="w-[200px] h-[120px] object-cover object-center rounded-lg cursor-pointer inline-block disabled:cursor-not-allowed"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
              loop
            />
          ))}
        </div>

        {/* <div className="space-x-10 animate-marquee w-max">
          {[...Array(5)]
            .flatMap(() => photos)
            .map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-[200px] border border-gray-800 h-[120px] object-cover object-center rounded-lg inline-block disabled:cursor-not-allowed"
              />
            ))}
        </div> */}
      </div>
    </section>
  )
}

export default HeroPage
