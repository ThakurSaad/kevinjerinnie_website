import { Tabs } from 'antd'
import ModelScript from './ModelScript'
const onChange = (key) => {
  console.log(key)
}
const items = [
  {
    key: '1',
    label: 'AI-Powered Customization for Every Niche',
    children: <ModelScript />,
  },
  {
    key: '2',
    label: 'Turn Text into Pro-Quality Videos in Minutes',
    children: <ModelScript />,
  },
  {
    key: '3',
    label: 'Save Time, Cut Costs, and Scale Content Fast',
    children: <ModelScript />,
  },
]

const WhyChoose = () => {
  return (
    <div className="responsive-base-width mt-32">
      <div className="text-5xl font-bold text-center max-w-[800px] mx-auto">
        Why Choose <span className="text-[#327CFE]">247WEB.AI</span> Script to
        Video AI Generator?
      </div>
      <div className="mt-10">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default WhyChoose
