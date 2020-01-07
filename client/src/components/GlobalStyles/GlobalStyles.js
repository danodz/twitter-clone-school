import { createGlobalStyle } from 'styled-components';

import './reset.css';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
