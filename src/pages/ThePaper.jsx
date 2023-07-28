import React, { useEffect, useState } from "react";
import ContentLore from "../components/ThePaper/ContentLore";
import Content from "../components/ThePaper/Content";
import DIVS from "../components/ThePaper/StylePaper";
import { styled } from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const initialState = [
  {
    name: "",
    id: "",
    description: "",
    button: "",
  },
];

const Div = styled.div`
  position: relative;
  top: 0px;
 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  animation-name: up;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  @keyframes up {
    0% {
      transform: translateY(950px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

const ThePaper = () => {
  const [contents, setContents] = useState(initialState);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    setContents(Content);
  }, []);

  const handleTraslate = (conditional) => {
    if (conditional === "down") {
      setTranslate(translate + 99);
    } else {
      setTranslate(0);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection:"column",
        height: "100vh",
      }}
    >
      <DIVS>
        {contents.map((content) => (
          <>
            <ContentLore
              key={content.id}
              data={content}
              translate={translate}
            />
          </>
        ))}
      </DIVS>
      <Div>
        {translate <= 250 ? (
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
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onClick={() => handleTraslate("down")}
          >
            <ArrowDownwardIcon sx={{ fontSize: "2.1em" }} />,
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
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onClick={() => handleTraslate("up")}
          >
            <ArrowUpwardIcon sx={{ fontSize: "2.1em" }} />,
          </button>
        )}
      </Div>
    </div>
  );
};

export default ThePaper;
