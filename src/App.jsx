import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Animals } from "./pages/Animals";
import Team from "./pages/Team";
import ThePaper from "./pages/ThePaper";
import VisionMap from "./pages/VisionMap";
import { SocialLink } from "./components/SocialLInk/SocialLink";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { GlobalStyled } from "./GlobalStyled";
import { Error404 } from "./pages/Error404";
import Details from "./pages/Details";
import Stages from "./components/Details/Details";
import Header from "./components/Header/Header";
import { Comingsoon } from "./pages/ComingSoon";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  const theme = useContext(ThemeContext);
  let bg = theme.theme;
  const Overflow = theme.overflow;
  const { backgroundColor, color, transition, backgroundImage } = bg;
  return (
    <main>
     
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Comingsoon />
              </>
            }
          />
         
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyled
        backgroundColor={backgroundColor}
        color={color}
        transition={transition}
        backgroundImage={backgroundImage}
        overflow={Overflow}
      />
    </main>
  );
}

export default App;
