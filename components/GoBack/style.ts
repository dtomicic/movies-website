import { sizes } from "@/styles/styles";
import styled from "styled-components";

export const GoBackStyled = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    width: fit-content;

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 700;

        @media (min-width: ${sizes.tablet}) {
            font-size: 18px;
        }

        @media (min-width: ${sizes.desktop}) {
            font-size: 24px;
        }
    }

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${sizes.desktop}) {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`