import React, { memo, useContext, useEffect, useMemo, useState} from "react";
import VisionImg from "../components/VisionMap/VisionImg";
import VisionContent2 from "../components/VisionMap/VisionContent2";
import ThemeContext from "../context/ThemeContext";
import Infos from "../components/VisionMap/info/Info";
import ImgResponsive from "../components/VisionMap/ImgResponsive";
import ContentResposive from "../components/VisionMap/ContentResponsive";
import styled from "@emotion/styled";
import InnerWidth from "../components/InnerWidth";

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

 useEffect(() => {
  if(widt <=800){
    setResponsive(true)
  }else{
    setResponsive(false)
  }
 }, [widt])

const VisionMapDestktop = useMemo(() => {
 return(
  VisionContent2.map((vision) => (
    <VisionImg key={vision.id} vision={vision} animacion={Aniamation} />
  ))
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
