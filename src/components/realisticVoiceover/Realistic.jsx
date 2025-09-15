import heroVideo from "../../assets/kevin videos/script to video/top used video/homepage bottom video.mp4";
import heroBg from "../../assets/herosectionImages/videoclipherobg.png";

const Realistic = () => {
  return (
    <div   style={{
             backgroundImage: `url(${heroBg})`,
             backgroundPosition: "top", 
             backgroundRepeat: "no-repeat", 
             // backgroundSize: "cover", 
           }}>
    
    <div className="mt-10 responsive-base-width">
      <p className="text-5xl font-bold leading-[72px] text-center">
        Bring Your Content to Life with <br />
        <span className="text-[#327CFE]">Ultra-Realistic AI </span>Voices.
      </p>
      <div className="text-center text-[#4F4F59] text-sm mt-5">
        Turn Your Words Into Cinematic Power
      </div>
      <div className="flex mx-auto ">
        <div className="text-center  text-white mx-auto bg-[#327CFE] px-10 py-4 rounded-full inline-flex items-center justify-center gap-2 mt-5">
          Create Now
        </div>
      </div>
      <div className="mt-20">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="w-full mt-10 rounded-2xl"
          ></video>
      </div>
    </div>
          </div>
  );
};

export default Realistic;
