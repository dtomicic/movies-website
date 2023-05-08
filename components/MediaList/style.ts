import { mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const MediaListStyled = styled.div`
    ${mixins.contentWide};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 20px;

    div {
        width: 100%;
        position: relative;

        img {
            width: 100%;
            display: block;
            height: auto;
        }

        .overlay {
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            transition: all 0.5s ease-in-out;
            padding: 10px;

            span {
                font-family: 'Montserrat', sans-serif;
                color: white;
                font-weight: 600;
                font-size: 16px;
                text-align: center;

                @media (min-width: ${sizes.tablet}) {
                    font-size: 22px;
                }

                @media (min-width: ${sizes.desktop}) {
                    font-size: 30 px;
                }
            }
        }

        &:hover {
            cursor: pointer;

            .overlay {
                opacity: 1;
            }
        }
    }

    @media (min-width: ${sizes.tablet}) {
        column-gap: 25px;
        row-gap: 35px;
    }

    @media (min-width: ${sizes.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 35px;
        row-gap: 45px;
    }
`;