import { mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const SearchStyled = styled.div`
    ${mixins.contentWide};
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    .search-input {
        margin-top: 15px;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin-top: 30px;

        span {
            font-weight: 700;
        }
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin-top: 10px;
    }

    .results {
        margin: 40px 0;
    }

    @media (min-width: ${sizes.tablet}) {
        padding-top: 55px;
        
        .search-input {
            margin-top: 25px;
        }

        h3 {
            font-size: 28px;
        }
    }

    @media (min-width: ${sizes.desktop}) {
        padding-top: 80px;

        h3 {
            font-size: 48px;
            margin-top: 50px;
        }
    }
`;
