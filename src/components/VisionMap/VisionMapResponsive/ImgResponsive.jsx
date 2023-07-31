import styled from "@emotion/styled";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../context/ThemeContext";

const ImgPersonaje = styled.img`
  z-index: 995;
  height: ${({ heigthp }) => heigthp};
  transition: filter, transform 0.3s ease-in-out;
  animation-name: ${({ name }) => name};
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-direction: alternate;

  filter: drop-shadow(0 0 1em ${({ dropshadow }) => dropshadow});

  @keyframes UpDown {
    0% {
      transform: translateY(-2000px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes leftRigth {
    0% {
      transform: translateX(1700px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const ImgResponsive = ({ vision, animacion }) => {
  const Context = useContext(ThemeContext);
  const Details = Context.handleDetails;
  const overflow = Context.setOverflow
  const {
    img,
    imgDetails,
    heigthP,
    dropShadow,
    name,
    url,
    imgPapiro,
    dropShadowinitial,
  } = vision;
  let personaje = img;

  const handleVaries = () => {
    Details({ imgDetails, name, dropShadow, imgPapiro })
    overflow("hidden")
  }

  return (
    <div>
      <Link
        to={url}
        onClick={handleVaries}
      >
        <ImgPersonaje
          src={personaje}
          alt={name}
          heigthp={heigthP}
          dropshadow={dropShadow}
          dropShadowinitial={dropShadowinitial}
          name={animacion}
        />
      </Link>
    </div>
  );
};

export default ImgResponsive;
