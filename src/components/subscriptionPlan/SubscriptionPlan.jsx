import { useState } from 'react'
import { Check } from 'lucide-react'

const monthly = [
  {
    name: 'Free',
    linkName: 'TRY FOR FREE',
    price: '$0',
    period: '/month',
    description: '',
    features: [
      'Video/month - 5',
      'Max Video Length - 60 sec',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Basic',
      'Auto Captions - Basic',
      'Background Audio - Basic',
      'Export Quality - 720p',
      'Support - Community Forum',
      'License - Personal Use Only',
    ],
    highlight: false,
  },
  {
    name: '🚀 LaunchPad Creator',
    price: '$28',
    period: '/month',
    description: 'Start creating stunning videos in seconds.',
    linkName: 'GET LAUNCH PAD',
    features: [
      'Video/month - 30',
      'Max Video Length - 3 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Realistic (3 voices)',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Smart Captions',
      'Hashtag Generator',
      'Auto Video Editing',
      'Shorts Editing',
      'Platform Resizing - 1-click for Reels/TikTok',
      'Background Audio - Stock Audio',
      'Analytics & SEO - Basic Optimization Suggestions',
      'Export Quality - 1080p',
      'Support - Email Support',
      'Creator License',
    ],
    highlight: false,
  },
  {
    name: '🎯 Viral Engine',
    price: '$49',
    period: '/month',
    description: 'Power your content. Go viral faster.',
    linkName: 'GET VIRAL ENGINE',
    features: [
      'Video/month - 100',
      'Max Video Length - 10 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Realistic (10+ voices)',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Style Captions + Emoji',
      'Hashtag Generator',
      'Auto Video Editing - Advanced Timeline Editor',
      'Shorts Editing',
      'Platform Resizing - Multi-platform (YT, IG, FB)',
      'Background Audio - Premium Music Tracks',
      'Realistic AI Avatars - Optional Add-on',
      'Analytics & SEO - SEO Boost Assistant',
      'Export Quality - 4K',
      'Support - Priority Email',
      'Full Commercial License',
    ],
    highlight: false,
  },
  {
    name: '👑 Infinity Studio',
    price: '$129',
    period: '/month',
    description: 'Unlimited creativity. Built for agencies and pros.',
    linkName: 'GET INFINITY STUDIO',
    features: [
      'Video/month - unlimited',
      'Max Video Length - 30 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Ultra HD Voice Studio',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Viral Caption Suite',
      'Hashtag Generator - Smart Trending Hashtags AI',
      'Auto Video Editing - Fully Automated Editor + Reels',
      'Shorts Editing - Bulk Reels + TikTok Quick Cut',
      'Platform Resizing - Smart Auto-Resizer + Templates',
      'Background Audio - Full Audio Library Access',
      'Realistic AI Avatars - Optional Add-on',
      'Analytics & SEO - AI-Powered Trend Analyzer',
      'Export Quality - 4K + Branded Export',
      'Support - Dedicated Slack & Zoom Chat',
      'Full Agency License',
    ],
    highlight: false,
  },
]

const yearly = [
  {
    name: 'Free',
    linkName: 'TRY FOR FREE',
    price: '$0',
    period: '/forever',
    features: [
      'Video/month - 5',
      'Max Video Length - 60 sec',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Basic',
      'Auto Captions - Basic',
      'Background Audio - Basic',
      'Export Quality - 720p',
      'Support - Community Forum',
      'License - Personal Use Only',
    ],
    highlight: false,
  },
  {
    name: '🚀 LaunchPad Creator',
    price: '$180',
    period: '/year (save 20%)',
    linkName: 'GET LAUNCH PAD',
    features: [
      'Video/month - 30',
      'Max Video Length - 3 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Realistic (3 voices)',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Smart Captions',
      'Hashtag Generator',
      'Auto Video Editing',
      'Shorts Editing',
      'Platform Resizing - 1-click for Reels/TikTok',
      'Background Audio - Stock Audio',
      'Analytics & SEO - Basic Optimization Suggestions',
      'Export Quality - 1080p',
      'Support - Email Support',
      'Creator License',
    ],
    highlight: false,
  },
  {
    name: '🎯 Viral Engine',
    price: '$480',
    period: '/year (save 20%)',
    linkName: 'GET VIRAL ENGINE',
    features: [
      'Video/month - 100',
      'Max Video Length - 10 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Realistic (10+ voices)',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Style Captions + Emoji',
      'Hashtag Generator',
      'Auto Video Editing - Advanced Timeline Editor',
      'Shorts Editing',
      'Platform Resizing - Multi-platform (YT, IG, FB)',
      'Background Audio - Premium Music Tracks',
      'Realistic AI Avatars - Optional Add-on',
      'Analytics & SEO - SEO Boost Assistant',
      'Export Quality - 4K',
      'Support - Priority Email',
      'Full Commercial License',
    ],
    highlight: false,
  },
  {
    name: '👑 Infinity Studio',
    price: '$1240',
    period: '/year (save 20%)',
    linkName: 'GET INFINITY STUDIO',
    features: [
      'Video/month - unlimited',
      'Max Video Length - 30 mins',
      'Script-to-Video',
      'Text-to-Video',
      'AI Voiceover - Ultra HD Voice Studio',
      'AI Image-to-Video',
      'AI Video Clip Maker',
      'AI Image Generator',
      'Auto Captions - Viral Caption Suite',
      'Hashtag Generator - Smart Trending Hashtags AI',
      'Auto Video Editing - Fully Automated Editor + Reels',
      'Shorts Editing - Bulk Reels + TikTok Quick Cut',
      'Platform Resizing - Smart Auto-Resizer + Templates',
      'Background Audio - Full Audio Library Access',
      'Realistic AI Avatars - Optional Add-on',
      'Analytics & SEO - AI-Powered Trend Analyzer',
      'Export Quality - 4K + Branded Export',
      'Support - Dedicated Slack & Zoom Chat',
      'Full Agency License',
    ],
    highlight: false,
  },
]

const SubscriptionPlan = () => {
  const [activeTab, setActiveTab] = useState('monthly')
  const currentPlans = activeTab === 'monthly' ? monthly : yearly

  return (
    <div className="text-center responsive-base-width mx-auto px-4 py-12  ">
      <div className="text-4xl md:text-5xl font-bold  mb-4">
        Subscription Plans
      </div>
      <div className="text-lg mb-12 max-w-2xl mx-auto">
        Choose the perfect plan to start creating stunning AI-powered videos
        with 247web.ai
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12 ">
        <div className="inline-flex  rounded-full p-1 shadow-lg bg-[#F1F1F2]">
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'monthly' ? ' shadow-md' : ''
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveTab('yearly')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'yearly'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              20% off
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ]">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden bg-[#F1F1F2] border-2 transition-all duration-300 hover:shadow-xl relative ${
              plan.highlight
                ? ' border-blue-500 shadow-lg transform scale-105'
                : ' border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-left  flex flex-col h-full">
              {/* Header */}
              <div
                className={`mb-6 ${
                  activeTab === 'yearly' ? 'max-h-[200px]' : 'h-[230px] '
                } bg-white px-5 py-10 flex flex-col `}
              >
                <h3 className="text-2xl font-bold  mb-5">{plan.name}</h3>

                <div className="flex items-baseline mb-5">
                  <span className="text-4xl font-bold ">{plan.price}</span>
                  <span className=" ml-1">{plan.period}</span>
                </div>

                {plan.description && (
                  <p className="text-sm  mb-4">{plan.description}</p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-grow px-5">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm ">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : index === 0
                    ? 'bg-gray-800 hover:bg-gray-900 text-white'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {plan.linkName}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionPlan
