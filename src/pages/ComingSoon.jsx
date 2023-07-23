import React from "react";

const H1 = {
  fontWeight: "bold",
  fontStyle: "Oblique",
  fontFamily: '"Bebas Neue" ,"sans-serif"',
  color: "rgb(6, 6, 6)",
  fontSize: "15em",
  display:"flex",
  justifyContent:"center",
  alingItems:"center",
  margin:"15rem auto"
};




export const Comingsoon = () => {
  return (
    <div>
      <h1 style={H1}>Coming Soon</h1>
    </div>
  );
};
