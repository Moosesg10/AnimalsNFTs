import { styled } from "styled-components";

const DIVS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 10%;
  min-height: 750px ;
  min-width:250px ;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 20%; 
  padding: 0;
  animation-name: move;
  animation-duration: 0.8s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: normal;
  filter: drop-shadow(0 0 3em ${({ dropshadow }) => dropshadow});

  @keyframes move {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;


export default DIVS