import React, { useEffect, useRef } from "react";
import sonido from "../assets/Breathead(pinkfloyd).mp3";
import { styled } from "styled-components";
import { useState } from "react";

const Audios = styled.audio`
  position: absolute;
  bottom: 1vh;
  left : 1vw;
 height:400px;
 background-color: #f7f0f0;

  &::-webkit-media-controls-panel {
    background-color: #8c2828;
  }
  &::-webkit-media-controls-mute-button{
    display: none;
  }
  &::-webkit-media-controls-rewind-button{
    display: none;
  }
`;

const Audio = () => {

 
  
  const AudioEl = useRef(null);


  useEffect(() => {
      window.addEventListener("click", () =>    AudioEl.current.play())
  }, []);

  return (
    <>
   
      <Audios loop  ref={AudioEl}>
      
      </Audios>
    </>
  );
};

export default Audio;
