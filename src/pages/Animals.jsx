import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import InnerWidth from "../components/InnerWidth";

const H1 = styled.h1`
  font-weight: bold;
  font-size: ${({ size }) => size}em;
  color: rgb(6, 6, 6);
  font-family: "Bebas Neue", "sans-serif";
  width: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-style: italic;
`;

export const Animals = () => {
  const [sizeh1, setSizeh1] = useState(18)
  const width = InnerWidth();


  useEffect(() => {
    if(width >=901 )setSizeh1(18)
    if(width <=900 )setSizeh1(12)
    if(width <=800 )setSizeh1(10)
    if(width <=700 )setSizeh1(9)
    if(width <=600 )setSizeh1(8)
    if(width <=500 )setSizeh1(7)
    if(width <=400 )setSizeh1(5)
  }, [width]);



  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-5rem ",
      }}
    >
      <H1 size={sizeh1}>Animals</H1>
    </div>
  );
};
