import { mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const DetailsPageStyled = styled.div`
    ${mixins.contentWide};
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .media-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 25px;
        gap: 20px;

        img {
            width: 100%;
            display: block;
            height: auto;
        }

        .media-info {
            display: flex;
            flex-direction: column;
            font-family: "Montserrat", sans-serif;

            h1 {
                font-size: 26px;
                text-align: center;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 15px;
            }

            span {
                font-weight: 600;
            }

            .tagline {
                font-family: "Lato", sans-serif;
                font-weight: 600;
                text-align: center;
                margin-bottom: 25px;
            }
        }
    }

    .related-media {
        margin-top: 50px;
        margin-bottom: 30px;

        h2 {
            font-size: 26px;
            font-family: "Montserrat", sans-serif;
            margin-bottom: 20px;
        }
    }

    @media (min-width: ${sizes.tablet}) {
        margin-top: 60px;

        .media-details {
            gap: 30px;

            img {
                width: 80%;
            }

            .media-info {
                h1 {
                    font-size: 28px;
                }

                p {
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                .tagline {
                    margin-bottom: 45px;
                }
            }
        }
    }

    @media (min-width: ${sizes.desktop}) {
        margin-top: 80px;
        gap: 30px;

        .media-details {
            flex-direction: row;
            align-items: flex-start;
            gap: 50px;

            img {
                width: 30%;
            }

            .media-info {
                h1 {
                    text-align: left;
                    font-size: 44px;
                    margin-bottom: 20px;
                }

                p {
                    margin-bottom: 30px;
                }

                .tagline {
                    text-align: left;
                }
            }
        }
    }
`;
