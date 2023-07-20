import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  :root{
    font-size: 60%; 
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }

  body{
    background-color: #d9d9d9;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .container {
    max-width: 120rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1.6rem;
  }
`;
