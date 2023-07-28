import React from 'react'
import VisionImg from './VisionMapDesktop/VisionImg'
import VisionContent2 from './VisionMapDesktop/VisionContent2'


const VisionDesktops = () => {
  return (
    <div style={{width:"100%", height:"108vh", marginTop:"-3em"}}>
      <div style={{ position:"relative",display:"flex", alignItems:"center",flexDirection:"column", height:"100%", width:"0", padding:"0", left:"50%", top:"-5%",zIndex:"999", }}>
        { <VisionImg vision={VisionContent2[1]} key={VisionContent2[0].id}/>}
        { <VisionImg vision={VisionContent2[2]} key={VisionContent2[1].id}/>}
        { <VisionImg vision={VisionContent2[4]} key={VisionContent2[2].id}/>}
      </div>
      <div style={{position:"relative", top:"-75%",display:"flex", justifyContent:"space-between", alignItems:"center",flexDirection:"row", height:"0%", padding:"0",zIndex:"998", width:"95%", left:"3%"}}>
        { <VisionImg vision={VisionContent2[6]} key={VisionContent2[0].id}/> }
        { <VisionImg vision={VisionContent2[0]} key={VisionContent2[1].id}/> }
      </div>
      <div style={{position:"relative", top:"-40%",display:"flex", justifyContent:"space-between", alignItems:"center",flexDirection:"row", height:"0", width:"93%", padding:"0",zIndex:"998", left:"5%"}}>
        { <VisionImg vision={VisionContent2[5]} key={VisionContent2[0].id}/> }
        { <VisionImg vision={VisionContent2[3]} key={VisionContent2[1].id}/> }
      </div>
    </div>
  )
}

export default VisionDesktops
