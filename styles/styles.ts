import { createGlobalStyle, css } from "styled-components";

export const colors = {
	primary: "#252525",
	secondary: "#ff3b3f",
	backgroundColor: "#f5f5f5",
};

export const sizes = {
	mobile: "360px",
	tablet: "768px",
	desktop: "1024px",
};

export const mixins = {
	contentWide: css`
		max-width: 320px;
		margin: 0 auto;
		width: 100%;

		@media (min-width: ${sizes.tablet}) {
			max-width: 600px;
		}

		@media (min-width: ${sizes.desktop}) {
			max-width: 1440px;
		}
	`,
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
