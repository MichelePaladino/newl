import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.6em;
  }
  
  body::-webkit-scrollbar {
    width: 0px;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: inherit;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    /* margin: 1rem; */
    margin-bottom: 0.6rem;
    font-size: 1.8rem;
  }

  table {
    font-size: 1.4rem
  }
`

export default GlobalStyles
