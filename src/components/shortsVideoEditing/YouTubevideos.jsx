import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import v1 from "../../assets/kevin videos/shorts video editing/short.png";
import v2 from "../../assets/kevin videos/shorts video editing/short4.png";
import v3 from "../../assets/kevin videos/shorts video editing/short2.mp4";
import v4 from "../../assets/kevin videos/shorts video editing/short3.png";
import { Link } from "react-router-dom";

const YouTubevideos = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="text-center responsive-base-width ">
      <p className="text-5xl font-bold">
        Create
        <span className="text-[#327CFE]"> YouTube videos </span>
        without <br /> showing your face
      </p>

      <div className="mt-5 font-roboto">
        {/* Section 1 */}
        <section
          ref={ref1}
          style={{
            background:
              "linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)",
          }}
          className="flex justify-between gap-5 px-5 py-4 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left "
          >
            <div className="text-4xl font-bold">Vertical First</div>
            <div className="text-white">
              Optimized for TikTok, Reels, YouTube Shorts — with transitions,
              crop, and pacing designed for mobile eyes.
            </div>
            <Link to={"/login"} className="mt-5">
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
            <img src={v1} alt="" />
          </motion.div>
        </section>

        {/* Section 2 */}
        <section
          ref={ref2}
          style={{
            background:
              "linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)",
          }}
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
            <div className="text-4xl font-bold">Instant Format Conversion</div>
            <div>
              Drop in widescreen footage, and the system centers the action,
              zooms appropriately, and adjusts text overlays automatically.
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
          style={{
            background:
              "linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)",
          }}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Built for the Hook</div>
            <div className="text-white">
              Focuses on the first 3 seconds of every short cutting fluff and
              front-loading engagement.
            </div>
            <Link to={"/login"} className="mt-5">
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
            <img src={v4} alt="" />
          </motion.div>
        </section>

        {/* Section 4 */}
        <section
          ref={ref4}
          style={{
            background:
              "linear-gradient(148deg, rgba(50, 124, 254, 0.60) 28.69%, rgba(255, 255, 255, 0.60) 111.89%)",
          }}
          className="flex justify-between gap-5 px-5 py-4 mt-10 rounded-2xl "
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
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
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">
              Endless Content from One Clip
            </div>
            <div>
              One raw video = 10 shorts. Multiply your reach without multiplying
              your work.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE] hover:!text-white py-3 rounded-full border text-[#327CFE] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default YouTubevideos;
