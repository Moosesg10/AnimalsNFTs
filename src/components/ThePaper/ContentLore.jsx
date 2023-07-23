import React from "react";
import { styled } from "styled-components";

const Div= styled.div`
   animation-name: up;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;

  @keyframes up {
    0% {
      transform: translateY(950px);
    }

    100% {
      transform: translateY(0px);
    }

  }

`
const ContentLore = ({ data}) => {
  const { title, description} = data;
  const { p1, p2, p3 } = description;


  return (
    <Div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "1.7rem", margin: "0 auto", flexShrink:"1", flexGrow:"1", flexBasis:"50%"}}>
      <h2
        style={{
          fontStyle: "italic",
          marginBottom: "-0.5rem",
          textAlign: "center",
          marginTop:"0.5rem",
          fontSize:"2em"
        }}
      >
        {title}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "normal",
          fontSize:"0.97em"
        }}
      >
        <span>{p1}</span>
        <span  >{p2}</span>
        <span  >{p3}</span>
      </p>     
    </Div>
  );
};

export default ContentLore;
