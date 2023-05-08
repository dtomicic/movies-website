import { mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const MainPageStyled = styled.section`
    ${mixins.contentWide};
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .input-box {
        width: 100%;

        @media (min-width: ${sizes.tablet}) {
            width: 65%;
        }

        @media (min-width: ${sizes.desktop}) {
            width: 45%;
        }
    }
`;
