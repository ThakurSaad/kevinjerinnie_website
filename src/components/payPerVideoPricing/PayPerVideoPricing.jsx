import { Check } from 'lucide-react'

const plans = [
  {
    id: 1,
    name: 'Basic Video',
    price: '$2.99',
    period: '/video',
    linkName: 'Get Started',
    features: [
      'Up to 1 min video',
      '720p Export Quality',
      'Script to Video',
      'Standard AI Voiceover',
      'Text to Video',
      'Basic - Music & Audio Tracks',
      'Auto Basic - AI Video Editing',
    ],
    highlight: false,
  },
  {
    id: 2,
    name: 'Pro Video',
    price: '$6.99',
    period: '/video',
    linkName: 'Get Started',
    features: [
      'Up to 5 min video',
      '1080p Export Quality',
      'Script to Video',
      'Realistic AI Voiceover',
      'Text-to-Video',
      'Image-to-Video',
      'AI Video Clips Generator',
      'Auto Captions + Hashtags',
      'Premium - Music & Audio Tracks',
      'Basic - Shorts Editing Tools',
      'Timeline Editor - AI Video Editing',
      'No Watermark',
      'Commercial License',
    ],
    highlight: false,
  },
  {
    id: 3,
    name: 'Premium Video',
    price: '$12.99',
    period: '/video',
    linkName: 'Get Started',
    features: [
      'Up to 15 min video',
      '4K Ultra HD Export Quality',
      'Script to Video',
      'Studio Quality AI Voiceover',
      'Text-to-Video',
      'Image-to-Video',
      'AI Video Clips Generator',
      'Viral Optimized Auto Captions + Hashtags',
      'Full Library - Music & Audio Tracks',
      'TikTok/IG Ready - Shorts Editing Tools',
      'AI Viral Builder - AI Video Editing',
      'No Watermark',
      'Commercial License',
    ],
    highlight: true,
  },
]

const PayPerVideoPricing = () => {
  return (
    <div className="  py-16 ">
      <div className="responsive-base-width mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Pay-Per-Video Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            On-Demand Access for Casual Users Perfect for solo creators,
            marketers, or occasional users who prefer flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden bg-transparent border-2 transition-all duration-300 hover:shadow-xl relative `}
            >
              <div className="text-left  flex flex-col h-full">
                <div className={`mb-6 bg-white px-5 py-10 flex flex-col `}>
                  <h3 className="text-2xl font-bold  mb-5">{plan.name}</h3>

                  <div className="flex items-baseline mb-5">
                    <span className="text-4xl font-bold ">{plan.price}</span>
                    <span className=" ml-1">{plan.period}</span>
                  </div>

                  {plan.description && (
                    <p className="text-sm  mb-4">{plan.description}</p>
                  )}
                </div>

                <div className="space-y-3 mb-8 flex-grow px-5">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 font-semibold"
                    >
                      <Check className="w-5 h-5 text-blue-600 font-bold mt-0.5 flex-shrink-0" />
                      <span className="text-sm ">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all overflow-hidden duration-300 ${
                      plan.id === 3
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'border border-blue-500 text-blue-600 overflow-hidden'
                    }`}
                  >
                    {plan.linkName}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PayPerVideoPricing
