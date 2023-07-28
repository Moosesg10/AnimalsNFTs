import React, { useContext, useEffect} from "react";
import Dark from "../../assets/reproductor/imagen.png";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import {
  Botones,
  Contendor,
  Disk,
  DivBoton,
  DivContentPanel,
  DivPanel,
  DivPrincipal,
  Sonidos,
} from "./styles/ComponentsReproductor";
import ThemeContext from "../../context/ThemeContext";

const Reproductor = () => {
  const ReproductorContext = useContext(ThemeContext);
  const {
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
  } = ReproductorContext;



  

  return (
    <DivPrincipal>
      <Contendor
        onMouseEnter={() => HandleMostar(true, "flex")}
        onMouseLeave={() => HandleMostar(false, "none")}
      >
        <Disk src={Dark} alt="disco" rotate={rotate} />
      </Contendor>
      {mostar && (
        <DivPanel
          onMouseEnter={() => HandleMostar(true, "flex")}
          onMouseLeave={() => HandleMostar(false, "none")}
          display={display}
        >
          <DivContentPanel>
            <p>
              {NameArtist} <span>({NameSongs})</span>
            </p>
          </DivContentPanel>
          <DivBoton>
            {numberSongs <= 0 ? (
              ""
            ) : (
              <Botones onClick={() => handleSongs("preview")}>
                <SkipPreviousIcon />
              </Botones>
            )}
            {buttonIcon ? (
              <Botones onClick={() => handleClix("toca")}>
                <PlayArrowIcon />
              </Botones>
            ) : (
              <Botones onClick={() => handleClix("pausa")}>
                <PauseIcon />
              </Botones>
            )}
            {numberSongs + 1 === Sonidos.length ? (
              ""
            ) : (
              <Botones onClick={() => handleSongs("next")}>
                <SkipNextIcon />
              </Botones>
            )}
          </DivBoton>
        </DivPanel>
      )}
      <audio src={SoundTrack} ref={Audio} />
    </DivPrincipal>
  );
};

export default Reproductor;
