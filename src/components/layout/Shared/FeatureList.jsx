import { Link } from 'react-router-dom'

const Features = () => {
  const leftPartItems = [
    {
      key: 'signup',
      content: (
        <Link to="/signup">
          <div>
            <span className="text-semibold border-2 border-[#1AC5FE] px-6 py-3 font-roboto rounded-md bg-white text-black mb-4">
              Sign Up
            </span>
          </div>
        </Link>
      ),
    },
    {
      key: 'signin',
      content: (
        <Link to="/login">
          <div>
            <span className="text-semibold   bg-[#1AC5FE] px-6 py-3 font-roboto rounded-md bg-white text-black mb-4">
              Sign In
            </span>
          </div>
        </Link>
      ),
    },
  ]

  const rightPartItems = [
    {
      key: 'script-to-Video',
      content: (
        <Link to="/script-to-Video">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Script to Video
          </div>
        </Link>
      ),
    },
    {
      key: 'ai-video-generator',
      content: (
        <Link to="/ai-video-generator">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            AI Video Generator
          </div>
        </Link>
      ),
    },
    {
      key: 'image-to-video',
      content: (
        <Link to="/image-to-video">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Image-to-Video
          </div>
        </Link>
      ),
    },
    {
      key: 'ai-caption-generator',
      content: (
        <Link to="/ai-caption-generator">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            AI Caption Generator
          </div>
        </Link>
      ),
    },
    {
      key: 'ai-video-clip',
      content: (
        <Link to="/ai-video-clip">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            AI Video Clip
          </div>
        </Link>
      ),
    },
    {
      key: 'ai-image-generator',
      content: (
        <Link to="/ai-image-generator">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            AI Image Generator
          </div>
        </Link>
      ),
    },
    {
      key: 'text-to-video',
      content: (
        <Link to="/text-to-video">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Text to Video
          </div>
        </Link>
      ),
    },
    {
      key: 'auto-caption-and-hashtags',
      content: (
        <Link to="/auto-caption-and-hashtags">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Auto Caption & Hashtags
          </div>
        </Link>
      ),
    },
    {
      key: 'realistic-voiceover',
      content: (
        <Link to="/realistic-voiceover">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Realistic Voiceover
          </div>
        </Link>
      ),
    },
    {
      key: 'auto-video-editing',
      content: (
        <Link to="/auto-video-editing">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Auto Video Editing
          </div>
        </Link>
      ),
    },
    {
      key: 'shorts-video-editing',
      content: (
        <Link to="/shorts-video-editing">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Shorts Video Editing
          </div>
        </Link>
      ),
    },
    {
      key: 'platform-resizing',
      content: (
        <Link to="/platform-resizing">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Platform Resizing
          </div>
        </Link>
      ),
    },
    {
      key: 'analytics-and-seo-tools',
      content: (
        <Link to="/analytics-and-seo-tools">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Analytics & SEO Tools
          </div>
        </Link>
      ),
    },
    {
      key: 'background-audio',
      content: (
        <Link to="/background-audio">
          <div className="text-semibold font-roboto font-semibold hover:text-[#1AC5FE] py-2">
            Background Audio
          </div>
        </Link>
      ),
    },
  ]

  return (
    <div className="flex flex-col p-4 rounded-lg min-w-[500px]">
      <section className="flex flex-col">
        <div>
          <Link to="/" className="font-bold font-roboto text-2xl">
            247WEB.AI
          </Link>
        </div>
        <div className="border-r mt-5 pr-4 gap-2  flex items-center justify-start">
          {leftPartItems.map((item) => (
            <div key={item.key}>{item.content}</div>
          ))}
        </div>
      </section>

      <div className=" mt-5">
        <div className="grid grid-cols-2 ">
          {rightPartItems.map((item, index) => (
            <div key={`${item.key}-${index}`}>{item.content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const featuresItems = [
  {
    label: <Features />,
    key: 'features-menu',
  },
]

export default featuresItems
