import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import v1 from "../../assets/kevin videos/auto video editing/first/1edit.png";
import v2 from "../../assets/kevin videos/auto video editing/first/2edit.png";
import v3 from "../../assets/kevin videos/auto video editing/first/3edit.png";
import v4 from "../../assets/kevin videos/auto video editing/first/4edit.mp4";
import v5 from "../../assets/kevin videos/auto video editing/first/5edit.mp4";

import { Link } from "react-router-dom";

const Back = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="py-10 text-center responsive-base-width ">
       <p className="text-center text-[#4F4F59]">Enhance every moment with dynamic background audio and professional sound effects. From perfect comedic timing to cinematic polish, our flexible sound library — plus custom audio imports — gives your videos a powerful edge in engagement and quality.</p>

      <div className="mt-5 font-roboto">
        {/* Section 1 */}
        <section
          ref={ref1}
          className="flex justify-between gap-5 px-5 py-4 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left "
          >
            <div className="text-4xl font-bold">Edit Raw Clips Instantly</div>
            <div>
              Upload unedited footage and let AI do the hard work — cuts,
              effects, music, and transitions done in seconds.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 py-3 hover:bg-[#327CFE]  rounded-full border text-[#327cfe] border-[#327CFE]">
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
            <img src={v1} alt="" />
          </motion.div>
        </section>

        {/* Section 2 */}
        <section
          ref={ref2}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-2/3"
          >
            <img src={v2} alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Smarter Than Templates</div>
            <div>
              No rigid presets. It adapts to your video’s flow, tone, and
              objective — whether it’s emotional, educational, or promotional.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE] hover:!text-white py-3 rounded-full border text-[#327CFE] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Section 3 */}
        <section
          ref={ref3}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Cinematic Polish</div>
            <div>
              Output looks like you hired an editor — with pro timing, color
              balance, and storytelling built in.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE]  py-3 rounded-full border text-[#327cfe] border-[#327CFE]">
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
            <img src={v3} alt="" />
          </motion.div>
        </section>

        {/* Section 4 */}
        <section
          ref={ref4}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-2/3"
          >
            <video
              src={v4}
              loop
              muted
              className="w-full h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Voices That Breathe</div>
            <div>
              This isn’t robotic text-to-speech. It’s AI voiceover that uses
              tone, emotion, and cadence to deliver real feeling
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE] hover:!text-white py-3 rounded-full border text-[#327CFE] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
        </section>
        {/* Section 5 */}
        <section
          ref={ref5}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Plug-and-Play Narration</div>
            <div>
              Pair with any script or video and get instantly synchronized audio
              without hiring a voice actor.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE]  py-3 rounded-full border text-[#327cfe] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-2/3"
          >
            <video
              src={v5}
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
  );
};

export default Back;

