import React, { memo, useContext, useEffect, useMemo, useState} from "react";
import ThemeContext from "../context/ThemeContext";
import Infos from "../components/VisionMap/info/Info";
import ImgResponsive from "../components/VisionMap/VisionMapResponsive/ImgResponsive";
import ContentResposive from "../components/VisionMap/VisionMapResponsive/ContentResponsive";
import styled from "@emotion/styled";
import InnerWidth from "../components/InnerWidth";
import VisionDesktops from "../components/VisionMap/VisonDesktops";

const Divs= styled.div`
    display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const VisionMap = () => {
  const Context = useContext(ThemeContext)
  const Aniamation= Context.animation
  const [responsive, setResponsive] = useState(false)
  const widt = InnerWidth()
  const Overflow = Context.setOverflow

 useEffect(() => {
  if(widt <=800){
    setResponsive(true)
    Overflow("scroll")
  }else{
    setResponsive(false)
    Overflow("hidden")

  }
 }, [widt])

const VisionMapDestktop = useMemo(() => {
 return(
    <VisionDesktops/>
 )
},[])

const VisionMapResponsive = useMemo(() => {
  return ( <Divs >
    {ContentResposive &&   ContentResposive.map((vision) => (
     <ImgResponsive key={vision.id} vision={vision} animacion={Aniamation} />
   ))}
   </Divs>)
}, [])

  return(
   <>
    {!responsive ? VisionMapDestktop : VisionMapResponsive}
  <Infos/>
   </>
    
    )
};

export default memo(VisionMap);
