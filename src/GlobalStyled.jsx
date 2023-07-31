import React from "react";
import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import bgvision from "./assets/BG-ESTRELLA.png";
import ThemeContext from "./context/ThemeContext";
import Limbo from "./assets/Img/Lore/Limbo.jpg";
import Theclan from "./assets/Img/Lore/Theclan.jpg";
import Ascencion from "./assets/Img/Lore/Ascencion.jpg";
import Iluminacion from "./assets/Img/Lore/Iluminacion.jpg";
import { useEffect } from "react";
import { useState } from "react";

const GloblaStyle = createGlobalStyle`

*,*:before,*:after{
  padding: 0;
  margin: 0;
  box-sizing:border-box ;
}

html{
padding: 0;
margin:0;
box-sizing:border-box;
background-color:${({ backgroundColor }) => backgroundColor};
background-image: url(${({ bgimg }) => bgimg});
background-repeat:no-repeat;
background-size:cover;
background-position: center;
object-fit: fill;
overflow-y:${({ overflow }) => overflow};
height:100vh;
width: 100vw;
}

body{
background-color:${({ backgroundcolors }) => backgroundcolors};
color: ${({ color }) => color};
transition: ${({ transition }) => transition};
max-height:100vh;
max-width:100vw;
height:100vh;
width: 100vw;
overflow: hidden;
overflow-y:${({ overflow }) => overflow};
padding: 0;
margin:0;
box-sizing:border-box;

} 

#root{
  height:100%;
  width: 100%;
  max-width:100% ;
  max-height:100% ;
}


body::-webkit-scrollbar {
-webkit-appearance: none;
background-color: transparent;

}

body::-webkit-scrollbar:vertical {
width:10px; 

}

body::-webkit-scrollbar-button:increment,
body::-webkit-scrollbar-button {
display: none;
} 

body::-webkit-scrollbar:horizontal {
height: 10px;
}

body::-webkit-scrollbar-thumb {
background-color: transparent;
border-radius: 20px;
border: 2px solid transparent;
}

body::-webkit-scrollbar-track {
border-radius: 10px;  
}
.DivMain{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

`;

export const GlobalStyled = ({
  backgroundColor,
  color,
  transition,
  backgroundImage,
  overflow,
  colorBGmain,
  backgroundColors
}) => {
  const [bgVision, setBgVision] = useState("");
  const context = useContext(ThemeContext);
  const StatusImg = context.imgStatus;


console.log(overflow) 

  useEffect(() => {
    if (backgroundImage) {
      if (StatusImg === "main") {
        setBgVision(bgvision);
      } else if (StatusImg === "Ascencio") {
        setBgVision(Ascencion);
      } else if (StatusImg === "Limbo") {
        setBgVision(Limbo);
      } else if (StatusImg === "The Clan") {
        setBgVision(Theclan);
      } else if (StatusImg === "Illumination") {
        setBgVision(Iluminacion);
      }
    } else{
      setBgVision("")
    }
  }, [StatusImg]);

  return (
    <GloblaStyle
      backgroundcolors={backgroundColors}
      color={color}
      transition={transition}
      overflow={overflow}
      bgimg={bgVision}
      colorBGmain={colorBGmain}
      backgroundColor={backgroundColor}
    />
  );
};
