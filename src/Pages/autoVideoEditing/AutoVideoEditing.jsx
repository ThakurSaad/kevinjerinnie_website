import React from 'react'
import AutoVideoHero from '../../components/autoVideoEditing/AutoVideoHero'
import EditSmarter from '../../components/autoVideoEditing/EditSmarter'
import TrustedByCreators from '../../components/trustedByCreators/TrustedByCreators'
import WantToKnowMore from '../../components/wantToKnowMore/WantToKnowMore'

const AutoVideoEditing = () => {
  return (
    <div>
      <AutoVideoHero/>
      <EditSmarter/>
       <TrustedByCreators/>
       <WantToKnowMore/>
    </div>
  )
}

export default AutoVideoEditing
