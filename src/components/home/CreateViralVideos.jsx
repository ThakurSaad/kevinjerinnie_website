import v1 from '../../assets/kevin videos/landing page/create viral videos/video1.mp4'
import v2 from '../../assets/kevin videos/landing page/create viral videos/Blythe_Dress_UGC_Effortless_Summer_Style_production_story_31130_9_16_1750177412317_SD0.1.mp4'
import v3 from '../../assets/kevin videos/landing page/create viral videos/Detox_Tea_The_Game_Changer_production_story_30500_9_16_1731413220441_SD5.mp4'
import v4 from '../../assets/kevin videos/landing page/create viral videos/Epic_European_Adventure_production_story_30454_9_16_1731330921867_SD7.mp4'
import v5 from '../../assets/kevin videos/landing page/create viral videos/Exploring_An_Alien_Jungle_A_Visual_Journey_production_story_30418_16_9_1731328198713_SD17.mp4'
const CreateViralVideos = () => {
  return (
    <div className=" responsive-base-width mt-48 text-center ">
      <div className="text-5xl font-bold ">
        Create <span className="text-[#327CFE]">Viral</span> videos
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <section
          className="grid grid-row-1 gap-5"
          direction="left"
          cascade
          triggerOnce
        >
          <video
            src={v1}
            loop
            muted
            className="w-full rounded-lg flex-1 h-[400px] cursor-pointer object-cover object-center"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
          <video
            src={v2}
            loop
            muted
            className="w-full rounded-lg flex-1 h-[400px] cursor-pointer object-cover object-center"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </section >

        <section>
          <video
            src={v3}
            loop
            muted
            className="w-full rounded-lg flex-1 h-full cursor-pointer object-cover object-center"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </section>

        <section className="grid grid-row-1 gap-5">
          <video
            src={v4}
            loop
            muted
            className="w-full rounded-lg flex-1 h-[400px] cursor-pointer object-cover object-center"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
          <video
            src={v5}
            loop
            muted
            className="w-full rounded-lg flex-1 h-[400px] cursor-pointer object-cover object-center"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </section>
      </div>
    </div>
  )
}

export default CreateViralVideos
