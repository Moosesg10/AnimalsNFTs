import React, { memo, useContext, useEffect, useMemo, useState} from "react";
import ThemeContext from "../context/ThemeContext";
import Infos from "../components/VisionMap/info/Info";
import ImgResponsive from "../components/VisionMap/VisionMapResponsive/ImgResponsive";
import ContentResposive from "../components/VisionMap/VisionMapResponsive/ContentResponsive";
import styled from "@emotion/styled";
import VisionDesktops from "../components/VisionMap/VisonDesktops";

const Divs= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4em ;
`

const VisionMap = () => {
  const Context = useContext(ThemeContext)
  const Aniamation= Context.animation
  const Widht = Context.width
  const Overflow = Context.setOverflow

 useEffect(() => {
  if(Widht <= 1000){
    Overflow("scroll")
  }else{
    Overflow("hidden")
  }
 }, [Widht])

console.log(Widht)

const VisionMapDestktop = () => {
 return(
 
          <VisionDesktops/>
    
 )
}
const VisionMapResponsive = () => {
  return ( <Divs >
    {ContentResposive &&   ContentResposive.map((vision) => (
     <ImgResponsive key={vision.id} vision={vision} animacion={Aniamation} />
   ))}
   </Divs>)
}
  return(
   <>
    {Widht >= 1000 ? VisionMapDestktop() : VisionMapResponsive()}
  <Infos/>
   </>
    )
};

export default VisionMap;
