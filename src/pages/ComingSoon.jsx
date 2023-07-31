import React, { useEffect, useState } from "react";
import InnerWidth from "../components/InnerWidth";
import styled from "@emotion/styled";
const H1 = styled.h1`
  font-weight: bold;
  font-size: ${({ size }) => size}em;
  color: rgb(6, 6, 6);
  font-family: "Bebas Neue", "sans-serif";
  width: 100%;
  padding: 0;
  font-style: italic;
  text-align:center;
`;

export const Comingsoon = () => {
  const [sizeh1, setSizeh1] = useState(18);
  const width = InnerWidth();



  

  useEffect(() => {
    if (width >= 1100) setSizeh1(15);
    if (width <= 1000) setSizeh1(12);
    if (width <= 813) setSizeh1(8);
    if (width <= 700) setSizeh1(8);
    if (width <= 600) setSizeh1(8);
    if (width <= 558) setSizeh1(5);
    if (width <= 400) setSizeh1(4);
    if (width <= 350) setSizeh1(4);
    if (width <= 300) setSizeh1(3);
  }, [width]);
  return (
    <>
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding:"0"
        }}
      >
        <H1 size={sizeh1}>Coming Soon</H1>

      </div>
    </>
  );
};
