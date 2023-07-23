import React, { useEffect, useRef } from "react";
import sonido from "../assets/Breathead(pinkfloyd).mp3";
import { styled } from "styled-components";

const Audios = styled.audio`
  &::-webkit-media-controls-panel {
    background-color: #ccc;
  }
`;

const Audio = () => {
  const AudioEl = useRef(null);

  const handlePlay = () => {
    AudioEl.current.play();
  };
  const handlePause = () => {
    AudioEl.current.pause();
  };

  useEffect(() => {
    AudioEl.current.play();
  }, []);

  return (
    <>
      <button onClick={handlePlay}>Sonar</button>
      <button onClick={handlePause}>Pausa</button>
      <Audios loop ref={AudioEl}>
        <source src={sonido} type="audio/ogg" />
        <source src={sonido} type="audio/ogg" />
      </Audios>
    </>
  );
};

export default Audio;
