import { styled } from "styled-components";

export const H2 = {
  fontWeight: "bold",
  fontFamily: "sans-serif",
  fontSize: "2em",
};

export const Article = {
  width: "400px",
  margin: "auto 0.5rem",
};

export const Nav = {
  display: "flex",
  justifyContent:"flex-end",
  width: "100%",
  gap:"1rem",

};

export const ButtonDark = {
  color: "rgb(6, 6, 6)",
  fontWeight:"600",
  fontSize: "1.3em",
  fontFamily: '"Bebas Neue" ,"sans-serif"',
  fontStyle: "oblique",
  textDecoration: " none",
  border:"none",
  cursor: "pointer",
};

export const ButtonLigt = {
  color: "#fcfcfcfc",
  fontWeight:"600",
  fontSize: "1.3em",
  fontFamily: '"Bebas Neue" ,"sans-serif"',
  fontStyle: "oblique",
  textDecoration: " none",
  border:"none",
  cursor: "pointer",
};

export const  bgDark = {
  backgroundColor: "rgb(6, 6, 6)",
  backgroundImage:false,
  color: "#fcfcfcfc",
  width: "100vw",
  height: "100vh",
  transition:" background 0.6s ease-out",
  height: "100%",
};

export const  bgLight = {
  backgroundColor: "#ffff",
  backgroundImage:false,
  color: "rgb(6, 6, 6)",
  width: "100vw",
  height: "100vh",
  transition:" background 0.6s ease-out",
  height: "100%"
};

const Header = styled.header`
  margin: 0;
  padding-right: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: transparent;
  width: 98%;

`

export const HS = styled.div`
   display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  flex-shrink: 1;
  color: black;
`

export const  VisionBG = {
  backgroundColor: "rgb(6, 6, 6)",
  backgroundImage:true,
  backgroundSize: "500%",
  color: "#fcfcfcfc",
  width: "100vw",
  height: "100vh",
  transition:" background 0.6s ease-out",
  height: "100%",
};


export default Header