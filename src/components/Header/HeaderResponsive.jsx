import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState } from "react";
import Header, {
  ButtonDark,
  ButtonLigt,
  bgLight,
  VisionBG,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_Vectorizado.svg";
import ThemeContext from "../../context/ThemeContext";
import AnimalWhite from "../../assets/AnimalsWhite.svg";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
const Divs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  flex-shrink: 1;
  color: black;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  background-color:transparent;

`;



const Buton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
`;

export const HeaderResponsive = () => {
  const theme = useContext(ThemeContext);
  let { color, logo } = theme;
  const handleAnimacion = theme.setAnimation;
  const handleVarios = (bg, button, bolean) => {
    theme.handleTheme(bg, button, bolean);
    handleAnimacion("UpDown");
  };

  const [mostarResponsive, setMostarResponsive] = useState(false);
  return (
    <Header>
      <Divs>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {logo ? (
            <Link
              style={color}
              to="/"
              onClick={() => handleVarios(bgLight, ButtonDark, true, false)}
            >
              <img
                src={Logo}
                style={{ width: "150px", height: "80px" }}
                alt="animals"
              />
            </Link>
          ) : (
            <Link
              style={color}
              to="/"
              onClick={() => handleVarios(bgLight, ButtonDark, true, false)}
            >
              <img
                src={AnimalWhite}
                style={{ width: "150px", height: "80px" }}
                alt="animals"
              />
            </Link>
          )}
          {!mostarResponsive ? (
            <Buton onClick={() => setMostarResponsive(true)}>
              {logo ? (
                <MenuIcon sx={{ color: "#222" }} />
              ) : (
                <MenuIcon sx={{ color: "#fff" }} />
              )}
            </Buton>
          ) : (
            <Buton onClick={() => setMostarResponsive(false)}>
            {logo ? (
              <CloseIcon sx={{ color: "#222" }} />
            ) : (
              <CloseIcon sx={{ color: "#fff" }} />
            )}
          </Buton>
          )}
        </div>
        {mostarResponsive && (
       
           <Nav onClick={() => setMostarResponsive(false)}>
            <Link
              style={color}
              to="/the-paper"
              onClick={() => handleVarios(VisionBG, ButtonLigt, false)}
            >
              The Process
            </Link>
            <Link
              style={color}
              to="/team"
              onClick={() => handleVarios(VisionBG, ButtonLigt, false)}
            >
              Team
            </Link>
            <Link
              style={color}
              to="/vision-map"
              onClick={() => handleVarios(VisionBG, ButtonLigt, false)}
            >
              <span> Vision Map</span>
            </Link>
          </Nav>
        )}
      </Divs>
    </Header>
  );
};
