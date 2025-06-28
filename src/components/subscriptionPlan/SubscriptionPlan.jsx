import { useState } from 'react'
import { Check } from 'lucide-react'

const monthly = [
  {
    name: 'Free',
    linkName: 'TRY FOR FREE',
    price: '$0',
    period: '/month',
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
    highlight: true,
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
    highlight: true,
  },
  {
    name: '🎯 Viral Engine',
    price: '$480',
    period: '/year (save 20%)',
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
    price: '$1240',
    period: '/year (save 20%)',
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

const SubscriptionPlan = () => {
  const [activeTab, setActiveTab] = useState('monthly')
  const currentPlans = activeTab === 'monthly' ? monthly : yearly

  return (
    <div className="text-center max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Subscription Plans
      </div>
      <div className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Choose the perfect plan to start creating stunning AI-powered videos
        with 247web.ai
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'monthly'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl relative ${
              plan.highlight
                ? 'bg-white border-blue-500 shadow-lg transform scale-105'
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-left h-full flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                {plan.description && (
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>
                )}

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
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
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                }`}
              >
                {plan.linkName}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
    </div>
  )
}

export default SubscriptionPlan
