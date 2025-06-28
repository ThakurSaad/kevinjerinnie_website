import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import img1 from '../../assets/kevin videos/landing page/unlock/unlock.png'

const items = [
  {
    title: 'AI isn’t just tech',
    desc: 'it’s your content powerhouse. Create, edit, and optimize videos effortlessly while making smarter, faster decisions. Start your AI video journey today',
  },
  {
    title: 'Turn ideas into stunning videos and shorts in minutes',
    desc: 'AI streamlines your workflow, boosts productivity, and delivers powerful insights to fuel your creativity.',
  },
  {
    title: 'Experience the future of content creation',
    desc: 'With AI video tools, simplify your process, amplify your reach, and transform your message into impact.',
  },
  {
    title: 'Re-imagine video creation with AI',
    desc: 'Save time, spark new ideas, and produce high-quality videos that captivate your audience — all with the power of intelligent automation.',
  },
]
const UnlockYourCreative = () => {
  return (
    <div className="text-center responsive-base-width mt-48 font-roboto">
      <div className="text-5xl font-bold">
        Unlock Your Creative Potential with AI{' '}
        <div className="text-[#327CFE]">Video Generation</div>
      </div>
      <div className="text-gray-500 mt-5 max-w-[800px] mx-auto mb-10">
        AI isn’t just technology — it’s your creative partner. Simplify video
        creation, boost productivity, and unlock insights that turn ideas into
        captivating content. Start your AI video journey today and see how it
        can transform your storytelling
      </div>
      <Link
        to={'/login'}
        className="text-white !bg-[#327CFE] px-10 py-4 rounded-full inline-flex items-center justify-center gap-2"
      >
        Start Exploring
        <FaArrowRight />
      </Link>

      <section className='flex gap-10 mt-20 items-center justify-center'>
        <div className='flex-1'>
          <img src={img1} alt="img" />
        </div>
        <div className='flex-1'>
          {items.map((item, index) => (
            <div key={index} className="flex gap-3  items-start justify-start mt-3">
              <div>
                <FaArrowRight className="text-[#327CFE] mt-1" />
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold ">{item.title}</div>
                <div className="mt-2 text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default UnlockYourCreative
