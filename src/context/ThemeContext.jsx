import { createContext, useState } from "react";
import {
  ButtonLigt,
  VisionBG,
} from "../components/Header/HeaderStyle";
import { DataUrl, THEMEBG, THEMEBUTTON ,colorlogo  } from "./VariablesVisionMap";


const ThemeContext = createContext();


const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState(THEMEBG);
  const [color, setColor] = useState(THEMEBUTTON);
  const [logo, setLogo] = useState(colorlogo);
  const [details, setDetails] = useState(DataUrl)
  const [animation, setAnimation] = useState({name:"UpDown"})
  const [responsive, setResponsive] = useState(false)

  const handleTheme = (theme, button, colorlogo) => {
    setTheme(theme);
    setColor(button);
    setLogo(colorlogo);
  };

  const Case = () => {
    setTheme(VisionBG);
    setColor(ButtonLigt);
  };

  const handleDetails= (data) => {
    setDetails(data)
  }


  const data = {
    theme,
    color,
    handleTheme,
    Case,
    logo,
    handleDetails,
    details,
    animation,
    setAnimation,
    responsive,
    setResponsive
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};



export { ThemeProvide };
export default ThemeContext;
