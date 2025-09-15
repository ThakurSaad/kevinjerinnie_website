import React from 'react'
import ShortsVideoEditingHero from '../../components/shortsVideoEditing/shortsVideoEditingHero'
import YouTubevideos from '../../components/shortsVideoEditing/YouTubevideos'
import StoryToTell from '../../components/autoCaption/StoryToTell'
import SubscriptionPlan from '../../components/subscriptionPlan/SubscriptionPlan'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'

const ShortsVideoEditing = () => {
  return (
    <div>
      <ShortsVideoEditingHero/>
      <YouTubevideos/>
      <StoryToTell/>
      <SubscriptionPlan/>
       <TrustedByCreators/>
       <WantToKnowMore/>
    </div>
  )
}

export default ShortsVideoEditing
