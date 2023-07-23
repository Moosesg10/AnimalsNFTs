import { styled } from "styled-components";

const DIVS = styled.div`
  max-height: 80%;
  max-width: 80%;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: transparent;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment,
  .contenedor::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: none;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export default DIVS