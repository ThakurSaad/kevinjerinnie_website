import React from 'react'
import AnalyticsTools from '../../components/AnalyticsSeoTools/AnalyticsTools'
import FacelessAIVideoMarketing from '../../components/AnalyticsSeoTools/FacelessAIVideoMarketing'
import Analytics from '../../components/AnalyticsSeoTools/Analytics'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'
const AnalyticsSeo = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-50 to-white'>
      <AnalyticsTools/>
      <FacelessAIVideoMarketing/>
      <Analytics/>
      <TrustedByCreators/>
      <WantToKnowMore/>
    </div>
  )
}

export default AnalyticsSeo
