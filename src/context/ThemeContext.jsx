import { createContext, useRef, useState } from "react";
import {
  ButtonLigt,
  VisionBG,
} from "../components/Header/HeaderStyle";
import { Sonidos } from "../components/Reproductor/styles/ComponentsReproductor";
import { DataUrl, THEMEBG, THEMEBUTTON ,colorlogo  } from "./VariablesVisionMap";


const ThemeContext = createContext();


const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState(THEMEBG);
  const [color, setColor] = useState(THEMEBUTTON);
  const [logo, setLogo] = useState(colorlogo);
  const [details, setDetails] = useState(DataUrl)
  const [animation, setAnimation] = useState({name:"UpDown"})
  const [responsive, setResponsive] = useState(false)
  const [overflow, setOverflow] = useState("hidden")
  const [buttonIcon, setButtonIcon] = useState(true);
  const [numberSongs, setNumberSongs] = useState(0);
  const [rotate, setRotate] = useState("");
  const [mostar, setMostar] = useState(false);
  const [display, setDisplay] = useState("none")

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

  /* Use Ref */
  const Audio = useRef(null);
  
  /* Constantes */
  const SoundTrack = Sonidos[numberSongs].sonido,
    NameSongs = Sonidos[numberSongs].name,
    NameArtist = Sonidos[numberSongs].aritist,
    TimeSongs = Sonidos[numberSongs].time;

  const handleClix = (Conditional) => {
    if (Conditional === "toca") {
      Audio.current.play();
      setButtonIcon(false);
      setRotate("rotate");
    } else if (Conditional === "pausa") {
      Audio.current.pause();
      setButtonIcon(true);
      setRotate("");
    }
  };
  
  const handleSongs = (Conditional) => {
    if (Conditional === "next") {
      setNumberSongs(numberSongs + 1);
      setButtonIcon(true);
      setRotate("");
    }
    if (Conditional === "preview") {
      setButtonIcon(true);
      setNumberSongs(numberSongs - 1);
      setRotate("");
    }
  };

  const HandleMostar = (Conditional, mostrar) => {
    setMostar(Conditional)
    setDisplay(mostrar)
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
    setResponsive,
    overflow,
    setOverflow,
    Audio,
    NameArtist,
    NameSongs,
    buttonIcon,
    rotate,
    mostar,
    SoundTrack,
    handleSongs,
    handleClix,
    HandleMostar,
    numberSongs,
    display,
    TimeSongs
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};



export { ThemeProvide };
export default ThemeContext;
