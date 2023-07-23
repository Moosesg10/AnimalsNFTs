import React, { useContext } from "react";
import Header, {
  Article,
  ButtonDark,
  ButtonLigt,
  Nav,
  bgLight,
  VisionBG,
  HS
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_Vectorizado.svg";
import ThemeContext from "../../context/ThemeContext";
import AnimalWhite from "../../assets/AnimalsWhite.svg";






export const Headers = () => {
  const theme = useContext(ThemeContext);
  let { color, logo } = theme;

  const handleAnimacion = theme.setAnimation;

  const handleVarios = (bg, button, bolean) => {
    theme.handleTheme(bg, button, bolean);
    handleAnimacion("UpDown");
  };

  return (
    <Header>
      <HS >
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
      <article style={Article}>
        <nav style={Nav}>
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
        </nav>
      </article>
      </HS>
    </Header>
  );
};
