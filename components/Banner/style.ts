import { mixins } from "@/styles/styles";
import styled from "styled-components";

export const BannerStyled = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
	height: 185px;
    position: relative;

	img {
        object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

export const HeroText = styled.div`
    ${mixins.contentWide};
    position: absolute;

    h1 {
        text-align: center;
        color: white;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 700;
    }
`
