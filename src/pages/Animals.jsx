import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import InnerWidth from "../components/InnerWidth";
import ThemeContext from "../context/ThemeContext";

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

const Width = useContext(ThemeContext).width

  useEffect(() => {
    if(Width >=901 )setSizeh1(18)
    if(Width <=900 )setSizeh1(12)
    if(Width <=800 )setSizeh1(10)
    if(Width <=700 )setSizeh1(9)
    if(Width <=600 )setSizeh1(8)
    if(Width <=500 )setSizeh1(7)
    if(Width <=400 )setSizeh1(5)
  }, [Width]);



  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <H1 size={sizeh1}>Animals</H1>
    </div>
  );
};
