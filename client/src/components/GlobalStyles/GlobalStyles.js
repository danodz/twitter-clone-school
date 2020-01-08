import { createGlobalStyle } from "styled-components";

import "./reset.css";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button {
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
