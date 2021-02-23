import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 55%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    font: 400 1.8rem Montserrat, sans-serif;
  }

  html, body {
    height: 100vh;
  }

  button {
    cursor: 'pointer';
  }

  input {
    font: 400 1.8rem Montserrat, sans-serif;
  }

  #__next {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6rem;
  }
`;
