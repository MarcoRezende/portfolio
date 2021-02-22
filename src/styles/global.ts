import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  html, body {
    height: 100vh;
  }

  button {
    cursor: 'pointer';
  }

  #__next {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 2rem;
  }
`;
