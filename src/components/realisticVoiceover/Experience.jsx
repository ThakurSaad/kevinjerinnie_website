import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import v1 from '../../assets/kevin videos/script to video/next level/247Web.ai Custom Video.mp4'
import v2 from '../../assets/kevin videos/script to video/next level/0511.mp4'
import v3 from '../../assets/kevin videos/script to video/next level/0511 (1).mp4'
import { Link } from 'react-router-dom'

const Experience = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="my-12 text-center responsive-base-width">
      <p className="text-5xl font-bold">
        Experience the Future of Audio <br /> Where Every
        <span className="text-[#327CFE]"> oice Feels Real</span>
      </p>

      <div className="mt-5 font-roboto">
        {/* Section 1 */}
        <section
          ref={ref1}
          style={{
            background:
              'linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)',
          }}
          className="flex justify-between gap-5 px-5 py-4 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left "
          >
            <div className="text-4xl font-bold">
              Voices That Breathe
            </div>
            <div className="text-white">
              This isn’t robotic text-to-speech. It’s AI voiceover that uses tone, emotion, and cadence to deliver real feeling.
            </div>
            <Link to={'/login'} className="mt-5">
              <span className="px-7 py-3 hover:bg-[#327CFE]  rounded-full border text-white border-white">
                Create Now
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-2/3"
          >
            <video
              src={v2}
              loop
              muted
              className="h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video>
          </motion.div>
        </section>

        {/* Section 2 */}
        <section
          ref={ref2}
          style={{
            background:
              'linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)',
          }}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-2/3"
          >
            <video
              src={v3}
              loop
              muted
              className="w-full h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">
              Multiple Languages & Accents
            </div>
            <div>
              Localize content at scale with a range of professional voices from different regions and dialects.
            </div>
            <Link to={'/login'} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE] hover:!text-white py-3 rounded-full border text-[#327CFE] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Section 3 */}
        <section
          ref={ref3}
          style={{
            background:
              'linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)',
          }}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">
              Plug-and-Play Narration
            </div>
            <div className="text-white">
             Pair with any script or video and get instantly synchronized audio without hiring a voice actor.
            </div>
            <Link to={'/login'} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE]  py-3 rounded-full border text-white border-white">
                Create Now
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-2/3"
          >
            <video
              src={v1}
              loop
              muted
              className="w-full h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

export default Experience




