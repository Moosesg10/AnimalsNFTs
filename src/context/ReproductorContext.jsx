import { createContext, useState } from "react";

const RerpoductorContext = createContext();

const RerproductorProvider = ({ children }) => {
  const [buttonIcon, setButtonIcon] = useState(true);
  const [numberSongs, setNumberSongs] = useState(0);
  const [rotate, setRotate] = useState("");
  const [mostar, setMostar] = useState(false);

  /* Use Ref */
  const Audio = useRef(null);

  /* Constantes */
  const SoundTrack = Sonidos[numberSongs].sonido,
    NameSongs = Sonidos[numberSongs].name,
    NameArtist = Sonidos[numberSongs].aritist;
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

  const HandleMostar = (Conditional) => {
    setMostar(Conditional);
  };

  const data = {
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
  };

  return (
    <RerpoductorContext.Provider value={data}>
      {children}
    </RerpoductorContext.Provider>
  );
};

export { RerproductorProvider };
export default RerpoductorContext;
