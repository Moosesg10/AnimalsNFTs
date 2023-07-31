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
import CloseIcon from "@mui/icons-material/Close";

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
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Buton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
`;

const ButonMenu = styled.button`
  position : absolute;
  right: 1vw;
  top: 1vh;
  background-color: transparent;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  color: #fff;
`;


const DivResponsive = styled.div`
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #4e4d4d99;
  overflow: hidden ;
`;

const LiResponsive = styled.li`
  list-style: none;
  border-bottom: thin solid #fff;
  width: 100%;
  height: 33.3%;
`;

const Links = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderResponsive = () => {
  const theme = useContext(ThemeContext);
  let { color, logo } = theme;
  const handleAnimacion = theme.setAnimation;
  const handelImg = theme.handelImg;

  const handleVarios = (bg, button, bolean, conditional) => {
    theme.handleTheme(bg, button, bolean);
    handleAnimacion("UpDown");
    handelImg(conditional);
    Overflow(overflow);
  };
  const [mostarResponsive, setMostarResponsive] = useState(false);
  return (
    <Header>
      <Divs>
        {!mostarResponsive ? (
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
                to="/home"
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
                to="/home"
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
        ) : (
          ""
        )}
        {mostarResponsive && (
          <DivResponsive>
            <Nav onClick={() => setMostarResponsive(false)}>
              <ButonMenu onClick={() => setMostarResponsive(false)}>
                <CloseIcon sx={{ fontSize:"2em"}} />
              </ButonMenu>
              <LiResponsive>
                <Links
                  style={color}
                  to="/the-paper"
                  onClick={() =>
                    handleVarios(VisionBG, ButtonLigt, false, "Limbo")
                  }
                >
                  The Process
                </Links>
              </LiResponsive>
              <LiResponsive>
                <Links
                  style={color}
                  to="/team"
                  onClick={() =>
                    handleVarios(VisionBG, ButtonLigt, false, "main")
                  }
                >
                  Team
                </Links>
              </LiResponsive>
              <LiResponsive>
                <Links
                  style={color}
                  to="/vision-map"
                  onClick={() =>
                    handleVarios(VisionBG, ButtonLigt, false, "main")
                  }
                >
                  <span> Vision Map</span>
                </Links>
              </LiResponsive>
            </Nav>
          </DivResponsive>
        )}
      </Divs>
    </Header>
  );
};
