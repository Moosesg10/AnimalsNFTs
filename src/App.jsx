import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { GlobalStyled } from "./GlobalStyled";
import { Error404 } from "./pages/Error404";
import { Comingsoon } from "./pages/ComingSoon";




function App() {
  const theme = useContext(ThemeContext);
  let bg = theme.theme;
  const Overflow = theme.overflow;
  const { backgroundColor, color, transition, backgroundImage ,backgroundColors } = bg;
  const ColorBGmainS = theme.colorBGmain;
  
  return (
    <div className="DivMain">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Comingsoon />
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
        colorBGmain={ColorBGmainS}
        backgroundColors={  backgroundColors}
      />
    </div>
  );
}

export default App;
