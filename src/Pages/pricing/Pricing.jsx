import PayPerVideoPricing from '../../components/payPerVideoPricing/PayPerVideoPricing'
import SubscriptionPlan from '../../components/subscriptionPlan/SubscriptionPlan'
import AddOnOptions from '../../components/addOnOptions/AddOnOptions'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'

const Pricing = () => {
  return (
    <div>
      <PayPerVideoPricing />
      <AddOnOptions />
      <div className="mt-20">
        <SubscriptionPlan />
      </div>
      <TrustedByCreators />
      <WantToKnowMore />
    </div>
  )
}

export default Pricing
