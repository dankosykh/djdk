import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 14px;
    font-family: sans-serif, arial;
    background-color: #EEF0F2;
  }
`;

export default GlobalStyle;