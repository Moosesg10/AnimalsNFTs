import React, { useContext } from "react";
import Header, {
  Article,
  ButtonDark,
  ButtonLigt,
  Nav,
  bgLight,
  VisionBG,
  HS,
  PaperBG
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_Vectorizado.svg";
import ThemeContext from "../../context/ThemeContext";
import AnimalWhite from "../../assets/AnimalsWhite.svg";






export const Headers = () => {
  const theme = useContext(ThemeContext);
  let { color, logo } = theme;

  const handleAnimacion = theme.setAnimation;
  const handelImg = theme.handelImg

  const Context = useContext(ThemeContext)
  const Overflow = Context.setOverflow
 

  const handleVarios = (bg, button, bolean,conditional ,overflow) => {
    theme.handleTheme(bg, button, bolean);
    handleAnimacion("UpDown");
    handelImg(conditional)
    Overflow(overflow)
  };

  return (
    <Header>
      <HS >
      {logo ? (
        <Link
          style={color}
          to="/home"
          onClick={() => handleVarios(bgLight, ButtonDark, true, false,"hidden")}
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
        onClick={() => handleVarios(bgLight, ButtonDark, true, false,"hidden")}
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
            onClick={() => handleVarios(PaperBG, ButtonLigt, false,"Limbo","hidden")}
          >
            The Process
          </Link>
          <Link
            style={color}
            to="/team"
            onClick={() => handleVarios(VisionBG, ButtonLigt, false,"main","hidden")}
          >
            Team
          </Link>
          <Link
            style={color}
            to="/vision-map"
            onClick={() => handleVarios(VisionBG, ButtonLigt, false,"main","hidden")}
          >
            Vision Map
          </Link>
        </nav>
      </article>
      </HS>
    </Header>
  );
};
