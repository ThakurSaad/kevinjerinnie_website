const items = [
  {
    value: '200X',
    title: 'Save video production costs',
  },
  {
    value: '30X',
    title: 'Reduce video editing time',
  },
  {
    value: '90%',
    title: 'Increase video engagement',
  },
]
const WhatPossibilities = () => {
  return (
    <div className="max-w-[700px] mx-auto mt-20 font-roboto text-center">
      <div className="font-bold text-5xl ">
        What’s possible with <span className="text-[#327CFE]">247WEB.AI</span>
      </div>
      <div className="text-[#4F4F59] mt-3">
        Discover the AI-Powered Tools That Transform Your Video Creation
        Experience.
      </div>
      <div className="grid grid-cols-3 ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center mt-10">
            <div className="text-6xl font-bold text-[#327CFE]">
              {item.value}
            </div>
            <div className=" mt-2">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatPossibilities
