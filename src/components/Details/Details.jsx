import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ImgPersonaje = styled.img`
  display: block;
  position: absolute;
  top: 1%;
  left: ${({ left }) => left};
  height: 100%;
  width: 81.2%;
  filter: drop-shadow(0 0 1em ${({ dropshadow }) => dropshadow});
  transform: ${({ transform }) => transform};
  right: ${({ right }) => right};
  z-index: 995;
`;

const ImgPapiro = styled.img`
  display: block;
  position: absolute;
  width: 38%;
  height: 41%;
  max-width: 30%;
  max-height: 44%;
  top: 35%;
  left: 35.5%;
  z-index: 997;
  animation-name: move;
  animation-duration: 0.8s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
  filter: drop-shadow(0 0 3em ${({ dropshadow }) => dropshadow});

  @keyframes move {
    0% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const Div = styled.div`
  display: block;
  position: absolute;
  font-family: inherit;
  font-style: italic;
  top: 37%;
  left: 35.5%;
  width: 30%;
  height: 30%;
  z-index: 999;
  color: rgb(6, 6, 6);
  animation-name: move;
  animation-duration: 0.8s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;

  @keyframes move {
    0% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Goback = styled(Link)`
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: 999;
  text-decoration: none;
  color: #9f9e9e;
  transition: color 0.3s ease-in;

  &:hover {
    color: #ffff;
  }

  animation-name: LeftRigth;
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;

  @keyframes LeftRigth {
    0% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const Stages = () => {
  const Context = useContext(ThemeContext);
  const Details = Context.details;
  const { imgDetails, name, dropShadow, imgPapiro } = Details;
  const handleAnimacion = Context.setAnimation;

  setTimeout(() => {
    handleAnimacion();
  }, 2500);

  return (
    <div>
      <ImgPersonaje
        src={imgDetails}
        alt={name}
        transform="none"
        left="-42.1%"
        dropshadow={dropShadow}
      />
      <ImgPersonaje
        src={imgDetails}
        alt={name}
        transform="scaleX(-1)"
        right="-42.1%"
        dropshadow={dropShadow}
      />
      <ImgPapiro src={imgPapiro} alt="papiro" dropshadow={dropShadow} />
      <Div></Div>
      <Goback onClick={() => handleAnimacion("leftRigth")} to="/vision-map">
        <ArrowBackIcon sx={{ fontSize: "2em" }} />
      </Goback>
    </div>
  );
};

export default Stages;
