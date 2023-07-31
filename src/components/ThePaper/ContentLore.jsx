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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.7rem;
  margin: 0 auto;
  flex-shrink: 1;
  flex-grow: 1;
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


const P=styled.p`
  font-family:"inter var","system-ui","sans-serif" ,"ui-sans-serif ", "system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetic Neue","Arial","Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height:35px;
  color:#f2eded;
  
`
const ContentLore = ({ data }) => {
  
   
  const description = data.description
  const title = data.title
  const {p1, p2 , p3} = description


  return (
    <Div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3em",
      
        }}
      >
        {title}
      </h2>
      <P
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "0.97em",
         
        }}
      >
        <span>{p1}</span>
        <span>{p2}</span>
        <span>{p3}</span>
      </P>
    </Div>
  );
};

export default ContentLore;
