import styled from "@emotion/styled";
import sonido from "../../../assets/reproductor/Money(pink floyd).mp3";
import sonido2 from "../../../assets/reproductor/Wish.mp3";
import sonido3 from "../../../assets/reproductor/Comfortably.mp3";

export const Botones = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
  font-size: 1.5em;
`;
export const Disk = styled.img`
  height: 60px;
  width: 60px;
  border: thin solid #fff;
  border-radius: 50%;
  animation: ${({ rotate }) => rotate} 3s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Contendor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 1rem;
  width: auto;
  background-color: #222;
  border-radius: 50%;
  height: auto;
  padding: 0.1em;
`;

export const Sonidos = [
  {
    sonido: sonido,
    name: "Money",
    aritist: "Pink floid",
    time: 380000,
  },
  {
    sonido: sonido2,
    name: "Wish",
    aritist: "Pink floid",
    time: 293000,
  }
];

export const DivPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1vh;
  left: 1vw;
  z-index: 999;
`;

export const DivPanel = styled.div`
  display: ${({display}) => display };
  justify-content: center;
  gap: 2em;
  align-items: center;
  width: 300px;
  background-color: #222;
  height: auto;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  height: 40px;
`;

export const DivContentPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const DivBoton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const DivPanelResponsive = styled.div`
  display: ${({display}) => display };
  justify-content: center;
  gap: 2em;
  align-items: center;
  width: 100px;
  background-color: #222;
  height: auto;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  height: 40px;
`;
export const DivBotonResposinve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
