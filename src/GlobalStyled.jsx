import React from "react";
import { createGlobalStyle } from "styled-components";
import bgvision from "./assets/BG-ESTRELLA.png"


const GloblaStyle = createGlobalStyle`
html,body{
background-color:${({backgroundcolor}) => backgroundcolor};
background-image: url(${({bgimg}) => bgimg});
background-repeat:repeat;
background-size:"auto";
object-fit: fill;
color: ${({color}) => color};
transition: ${({transition}) => transition};
max-height: 100vh;
max-width: 1280px;
overflow-y:${({overflow}) => overflow};
overflow-x: hidden;
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
background-color: #050505c5;
border-radius: 20px;
border: 2px solid #e1e1df;
}

body::-webkit-scrollbar-track {
border-radius: 10px;  
}

`;


export const GlobalStyled = ({ backgroundColor, color, transition , backgroundImage,overflow}) => {
  
  let Bgvision=""

  if(backgroundImage){
    Bgvision = bgvision
  }else{
    Bgvision=""
  }
  
  return <GloblaStyle  backgroundcolor={backgroundColor} color={color} transition={transition}  overflow={overflow} bgimg={Bgvision} />;
};
