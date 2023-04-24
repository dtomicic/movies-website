import { sizes } from "@/styles/styles";
import styled from "styled-components";

export const NavigationStyled = styled.nav`
	display: flex;
    width: 100%;
    justify-content: center;
	background-color: #0a0a0a;
    padding: 16px 0;

    img {
        display: block;
        width: 100%;
        height: auto;

        @media (min-width: ${sizes.tablet}) {
            width: 45px;
            height: 45px;
        }

        @media (min-width: ${sizes.desktop}) {
            width: 60px;
            height: 60px;
        }
    }
`;
