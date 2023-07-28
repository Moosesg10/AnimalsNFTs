import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  animation-name: up;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  transform: translateY(-${({translate}) => translate}%);
  transition: transform 0.8s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.7rem;
  margin: 0 auto;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 50% ;
  width: 100%;
  height: 100%;
  @keyframes up {
    0% {
      transform: translateY(950px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;
const ContentLore = ({ data, translate }) => {
  const { title, description, img } = data;
  const { p1, p2, p3 } = description;

  return (
    <Div
      translate={translate}
    >
      <h2
        style={{
          fontStyle: "italic",
          marginBottom: "-0.5rem",
          textAlign: "center",
          marginTop: "0.5rem",
          fontSize: "2em",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "normal",
          fontSize: "0.97em",
        }}
      >
        <span>{p1}</span>
        <span>{p2}</span>
        <span>{p3}</span>
      </p>
      <img
        src={img}
        alt={title}
          height="400px"
        style={{ marginBottom: "3em", width:"100%", maxWidth:"100%", maxHeight:"100%" }}
      />
    </Div>
  );
};

export default ContentLore;
