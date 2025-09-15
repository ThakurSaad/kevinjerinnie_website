import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import v1 from "../../assets/kevin videos/image to video/Transform any/1.png";
import v2 from "../../assets/kevin videos/image to video/Transform any/2.png";
import v3 from "../../assets/kevin videos/image to video/Transform any/video1.mp4";
import v4 from "../../assets/kevin videos/image to video/Transform any/video2.mp4";
import { Link } from "react-router-dom";

const ImageToVideoBanner = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="mt-48 text-center responsive-base-width">  

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
            <div className="text-4xl font-bold">Create without constraints</div>
            <div className="text-white">
              Type your idea, add the specifics—like length, platform, voiceover
              accent and get a video perfectly tailored to your vision.
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
              <img
              src={v1}
              alt=""
              loop
              muted
              className="w-full h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            {/* <video
              src={v2}
              loop
              muted
              className="h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            ></video> */}
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
            <div className="text-4xl font-bold">Create inspiring videos</div>
            <div>
              Prompt your idea and let 247WEB.AI, AI do its magic. Make videos
              that once felt impossible.
            </div>
            <Link to={"/login"} className="mt-5">
              <span className="px-7 hover:bg-[#327CFE] hover:!text-white py-3 rounded-full border text-[#327CFE] border-[#327CFE]">
                Create Now
              </span>
            </Link>
          </motion.div>
        </section>


                   {/* Section 3*/}
  
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
            <div className="text-4xl font-bold">Your story, your way</div>
            <div className="text-white">
              247WEB.AI uses powerful AI tools to make changes at your command.
              No technical skills needed.
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
            <img
              src={v1}
              alt=""
              loop
              muted
              className="w-full h-full cursor-pointer rounded-3xl"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />

          </motion.div>
        </section>

      

    



        
        {/* Section 4 */}
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
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center w-1/3 gap-5 text-left"
          >
            <div className="text-4xl font-bold">Create inspiring videos</div>
            <div>
              Prompt your idea and let 247WEB.AI, AI do its magic. Make videos
              that once felt impossible.
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

export default ImageToVideoBanner;
