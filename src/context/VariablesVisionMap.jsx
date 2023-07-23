import Muladhara from "../assets/Img/Personajevision/chakara-rojo.png";
import Svadhisthana from "../assets/Img/Personajevision/chakara-naranja.png";
import Manipura from "../assets/Img/Personajevision/chakara-amarrilo.png";
import Anahata from "../assets/Img/Personajevision/chakara-verde.png";
import Vishuddha from "../assets/Img/Personajevision/chakara-celeste.png";
import Ajna from "../assets/Img/Personajevision/chakara-azul-1.png";
import {
  ButtonDark,
  ButtonLigt,
  VisionBG,
  bgLight,
} from "../components/Header/HeaderStyle";
import Muladharapapiro from "../assets/Img/personajeDetalles/Muladhara.png";
import Svadhisthanapapiro from "../assets/Img/personajeDetalles/Svadhisthana.png";
import Manipurapapiro from "../assets/Img/personajeDetalles/Manipura.png";
import Anahatapapiro from "../assets/Img/personajeDetalles/Anahata.png";
import Vishuddhapapiro from "../assets/Img/personajeDetalles/Vishuddha.png";
import Ajnapapiro from "../assets/Img/personajeDetalles/Ajna.png";
import MuladharaDetails from "../assets/Img/personajeDetalles/chakara-rojo.png";
import SvadhisthanaDetails from "../assets/Img/personajeDetalles/chakara-naranja.png";
import ManipuraDetails from "../assets/Img/personajeDetalles/chakara-amarrillo.png";
import AnahataDetails from "../assets/Img/personajeDetalles/chakara-verde.png";
import VishuddhaDetails from "../assets/Img/personajeDetalles/chakara-celeste.png";
import AjnaDetails from "../assets/Img/personajeDetalles/chakara-azul.png";

let DataUrl = {};

let THEMEBG = bgLight,
  THEMEBUTTON = ButtonDark,
  colorlogo = true;

if (window.location.pathname === "/vision-map") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  colorlogo = false;
}
if (window.location.pathname === "/the-paper") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  colorlogo = false;
}

if (window.location.pathname === "/team") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  colorlogo = false;
}

if (window.location.pathname === "/vision-map/Manipura") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Manipura,
    name: "Manipura",
    dropShadow: "#a47404",
    imgPapiro: Manipurapapiro,
    imgDetails: ManipuraDetails,
  };
}
if (window.location.pathname === "/vision-map/Muladhara") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Muladhara,
    name: "Muladhara",
    dropShadow: "#be2b42",
    imgPapiro: Muladharapapiro,
    imgDetails: MuladharaDetails,
  };
}
if (window.location.pathname === "/vision-map/Svadhisthana") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Svadhisthana,
    name: "Svadhisthana",
    dropShadow: "#c66132",
    imgPapiro: Svadhisthanapapiro,
    imgDetails: SvadhisthanaDetails,
  };
}
if (window.location.pathname === "/vision-map/Anahata") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Anahata,
    name: "Anahata",
    dropShadow: "#1bce7a",
    imgPapiro: Anahatapapiro,
    imgDetails: AnahataDetails,
  };
}
if (window.location.pathname === "/vision-map/Vishuddha") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Vishuddha,
    name: "Vishuddha",
    dropShadow: "#00eaf8",
    imgPapiro: Vishuddhapapiro,
    imgDetails: VishuddhaDetails,
  };
}
if (window.location.pathname === "/vision-map/Ajna") {
  THEMEBG = VisionBG;
  THEMEBUTTON = ButtonLigt;
  DataUrl = {
    personaje: Ajna,
    name: "Ajna",
    dropShadow: "#3380e6",
    imgPapiro: Ajnapapiro,
    imgDetails: AjnaDetails,
  };
}

export { DataUrl, THEMEBG, THEMEBUTTON, colorlogo };
