import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    color: inherit;
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    scroll-behavior: smooth;
  }
  
  body{
    font-size: 16px;
    font-family: "Lato", sans-serif;
  }

  .title{
    font-style: normal;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (min-width: 768px){
      font-size: 3rem;
      line-height: 3.6rem;
      margin-bottom: 10px;
    }
  }

  .subtitle{
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 15px;
    text-align: center;
  }

  .paragraph{
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.1875rem;
    margin: 0 auto 30px;
    max-width: 700px;
    text-align: center;
  }

  .separator-top{
    margin-top: 48px;
  }
`;

export default GlobalStyle;
