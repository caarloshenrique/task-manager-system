import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto';
    background: #f7f7f9;
    color: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    font: 14px 'Roboto';
  }

  button {
    cursor: pointer;
  }

`;
