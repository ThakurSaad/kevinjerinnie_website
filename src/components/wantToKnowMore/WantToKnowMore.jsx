import { useState } from 'react'
import { RxCross1, RxPlus } from 'react-icons/rx'
import needHelpImage from '../../assets/kevin videos/pricing/needHelp.png'
const items = [
  {
    title: 'Is 247WEB AI included with my existing 247WEB AI Studio plan?',
    desc: 'For people don&apos;t know what&apos;s "enough" to post or fear judgment for not doing sustainability perfectly, we provide a low-barrier, free-form feed that allows everyone to contribute their own sustainability story—whether it&apos;s a question, a small habit shift, or a deep dive into research.',
  },
  {
    title: 'What happens after I cancel my subscription?',
    desc: 'You can have curated, quality-controlled online workshops led by trusted power users—encouraging shared learning, reflection, and real-world application.',
  },
  {
    title: 'What should I do if I run out of my quotas mid-month?',
    desc: 'We designed our profile to not only tracks progress but celebrates intentions, reflections, and personal evolution, so that users can see how their actions add up or how they&apos;re growing.',
  },
  {
    title:
      'Will my exports, generation, and iStock credits roll over into the next month or billing cycle?',
    desc: 'We designed our profile to not only tracks progress but celebrates intentions, reflections, and personal evolution, so that users can see how their actions add up or how they&apos;re growing.',
  },
]

const WantToKnowMore = () => {
  const [expandedItems, setExpandedItems] = useState(
    items.reduce((acc, _, index) => {
      acc[index] = false
      return acc
    })
  )

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="text-center  mt-32 responsive-base-width">
      <div className=" text-5xl font-bold">
        Want to <span className="text-[#327CFE]">Know</span> More?
      </div>

      <section className="flex justify-between gap-10 mt-10">
        <div className="flex items-start flex-col justify-start text-start   border-gray-500 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-5  border-b    border-blue-300 pt-5 w-full"
            >
              <div className="flex justify-between  w-full">
                <div className="text-2xl font-bold">{item.title}</div>
                <div>
                  <button
                    onClick={() => toggleItem(index)}
                    className="text-2xl mt-0.5 cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    {expandedItems[index] ? <RxCross1 /> : <RxPlus />}
                  </button>
                </div>
              </div>
              <div className="text-xl my-4">{item.subtitle}</div>
              {expandedItems[index] && (
                <div className="text-lg mt-2">{item.desc}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <img src={needHelpImage} alt="needHelpImage" className="" />
      </section>
    </div>
  )
}

export default WantToKnowMore
