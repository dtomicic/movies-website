import { createGlobalStyle } from "styled-components";

export const colors = {
	primary: "#252525",
	secondary: "#ff3b3f",
	backgroundColor: "#f5f5f5",
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: ${colors.backgroundColor};
  }  
`;
