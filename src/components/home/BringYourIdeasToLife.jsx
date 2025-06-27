import homePageVideo from '../../assets/kevin videos/landing page/bring your ideas/script-to-video-landing-page-1080p.mp4'
const BringYourIdeasToLife = () => {
  return (
    <div className="responsive-base-width">
      <video
        src={homePageVideo}
        autoPlay
        loop
        muted
        className=" h-[50vh] mx-auto rounded-2xl object-cover object-center"
      />
    </div>
  )
}

export default BringYourIdeasToLife
