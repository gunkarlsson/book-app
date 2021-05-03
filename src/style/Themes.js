import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bgColor1: "white",
  bgColor2: "#f8f8f8",
  fontColor1: "black",
  fontColor2: "grey",
  accentColor: "orange",
};

export const darkTheme = {
  bgColor1: "black",
  bgColor2: "#454545",
  fontColor1: "white",
  fontColor2: "#f8f8f8",
  accentColor: "orange",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
    
    border: 2px solid ${(props) => props.theme.fontColor1};
    color:${(props) => props.theme.fontColor1};
    background-color: ${(props) => props.theme.bgColor2};
    z-index: 10;
}
/* body {
    background-color: ${(props) => props.theme.bgColor2};
    color: ${(props) => props.theme.fontColor1};
} */

`;
