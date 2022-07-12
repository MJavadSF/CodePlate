import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
