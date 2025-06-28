import v1 from '../../assets/kevin videos/landing page/for anyone/MicrosoftTeams-video (1).mp4'
import v2 from '../../assets/kevin videos/landing page/for anyone/MicrosoftTeams-video.mp4'
import img1 from '../../assets/kevin videos/landing page/for anyone/audio_talking.jpg'
import img2 from '../../assets/kevin videos/landing page/for anyone/audio.jpg'
import img3 from '../../assets/kevin videos/landing page/for anyone/web.png'

const ForAnyoneWithAStory = () => {
  return (
    <div className="text-center responsive-base-width mt-48 font-roboto">
      <div className="text-5xl font-bold">
        For anyone with a <span className="text-[#327CFE]">story</span> to tell
      </div>

      <div className="mt-5">
        <section className="grid grid-cols-2 gap-5">
          <video
            src={v2}
            loop
            muted
            className="h-full cursor-pointer rounded-3xl"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          ></video>
          <video
            src={v1}
            loop
            muted
            className="h-full cursor-pointer rounded-3xl"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          ></video>
        </section>
        <section className="mt-5">
          <img src={img3} alt="web image" />
        </section>

        <section className="grid grid-cols-2 gap-5 mt-10 ">
          <section className="bg-[#DFEBFF] px-10 py-5 rounded-2xl flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-5">
              <div className="font-bold text-4xl">True-to-life voiceover</div>
              <div>
                <img src={img2} alt="web image" className="rounded-2xl" />
              </div>
              <div className="flex items-center justify-center gap-4 font-semibold text-gray-500">
                <div className=" text-black">Preset voiceover</div>
                <div>AI voice cloning</div>
                <div>Transitions</div>
              </div>
            </div>
          </section>
          <section className="bg-[#020A22] rounded-2xl px-10 py-5 flex flex-col items-center justify-center">
            <div>
              <div className="font-bold text-3xl text-start text-white">
                Collaborate in real-time with multiplayer editing
              </div>
              <div className="py-5 ">
                <img src={img1} alt="web image" className="rounded-2xl" />
              </div>
              <div className="mt-5 flex items-start justify-start">
                <span className="text-white border border-white px-7 py-3 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default ForAnyoneWithAStory
