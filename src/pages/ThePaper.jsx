import React, { useEffect, useState } from "react";
import ContentLore from "../components/ThePaper/ContentLore";
import Content from "../components/ThePaper/Content";
import DIVS, { Div } from "../components/ThePaper/StylePaper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const ThePaper = () => {
  const [contentNumber, setContentNumber] = useState(0)
  const [contents, setContents] = useState(Content[contentNumber]);

  const context = useContext(ThemeContext)
  const handleImg = context.handelImg

 useEffect(() => {
  setContents(Content[contentNumber])

 }, [contentNumber])
 useEffect(() => {
  handleImg(contents.title)
}, [contents])

  const handleTraslate = (conditional) => {
    if (conditional === "down") {
      setContentNumber(contentNumber + 1)
        console.log(contentNumber)
    } else {
      setContentNumber(0)

    }
  };



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        height: "100%",
        width:"100%",
      }}
    >
      <DIVS>
            <ContentLore
              key={contents.id}
              data={contents}
            />
      </DIVS>
      <Div>
        {contentNumber <= 2.5 ? (
          <button
            style={{
              background: "#fffdfd",
              border: "none",
              borderRadius: "3em",
              cursor: "pointer",
              color: "#222",
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign:"center",
              
            }}
            onClick={() => handleTraslate("down")}
          >
            <ArrowDownwardIcon sx={{ fontSize: "2.1em", marginLeft:"0.2rem"  }} />,
          </button>
        ) : (
          <button
            style={{
              background: "#fffdfd",
              border: "none",
              borderRadius: "3em",
              cursor: "pointer",
              color: "#222",
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign:"center",
             

            }}
            onClick={() => handleTraslate("up")}
          >
            <ArrowUpwardIcon sx={{ fontSize: "2.1em" , marginLeft:"0.2rem" }} />,
          </button>
        )}
      </Div>
    </div>
  );
};

export default ThePaper;
