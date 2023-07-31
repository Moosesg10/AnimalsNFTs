import React from 'react'
import VisionImg from './VisionMapDesktop/VisionImg'
import VisionContent2 from './VisionMapDesktop/VisionContent2'


const VisionDesktops = () => {
  return (
    <div style={{width:"100%", height:"100%", display:"flex" , justifyContent:"space-around", flexDirection:"row", flexWrap:"wrap"}}>
      <div style={{display:'flex', flexDirection:"column", justifyContent: 'space-evenly', alignContent:"center", height: "100%", alignItems: "center",width:"0", padding:"0",zIndex:"999",}}>
        { <VisionImg vision={VisionContent2[6]} key={VisionContent2[0].id}/> }
        { <VisionImg vision={VisionContent2[5]} key={VisionContent2[1].id}/> }
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column", alignContent:"center",height:"100%", width:"0", padding:"0",zIndex:"999", }}>
        { <VisionImg vision={VisionContent2[1]} key={VisionContent2[0].id}/>}
        { <VisionImg vision={VisionContent2[2]} key={VisionContent2[1].id}/>}
        { <VisionImg vision={VisionContent2[4]} key={VisionContent2[2].id}/>}
      </div> 
      <div style={{display:'flex', flexDirection:"column", justifyContent: 'space-evenly', alignContent:"center", height: "100%", alignItems: "center",width:"0", padding:"0",zIndex:"999",}}>
        { <VisionImg vision={VisionContent2[0]} key={VisionContent2[0].id}/> }
        { <VisionImg vision={VisionContent2[3]} key={VisionContent2[1].id}/> }
      </div>
    </div>
  )
}

export default VisionDesktops
