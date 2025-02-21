import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.primary};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.text};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  *:disabled {
    cursor: not-allowed;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;
