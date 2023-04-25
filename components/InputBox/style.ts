import { colors, sizes } from "@/styles/styles";
import styled from "styled-components";

export const InputBoxStyled = styled.form`
	display: flex;
	margin-top: 20px;
	width: 100%;

	div {
		position: relative;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;

		button {
			position: absolute;
			left: 15px;
			background-color: transparent;
			border: none;

            &:hover {
                cursor: pointer;
            }

            @media (min-width: ${sizes.tablet}) {
                left: 20px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            @media (min-width: ${sizes.desktop}) {
                svg {
                    width: 25px;
                    height: 25px;
                }
            }
		}

		input {
			width: 100%;
            font-family: 'Lato', sans-serif;
            font-weight: 600;
			padding: 10px 40px;
            border: 1px solid #D5D5D5;
            border-radius: 10px;
            transition: all 0.3s ease-in-out;

			&::placeholder {
				font-weight: 700;
				font-size: 14px;
			}

            &:focus {
                outline: none;
                border: 1px solid ${colors.primary};
            }

            @media (min-width: ${sizes.tablet}) {
                padding: 15px 60px;
                font-size: 16px;

                &::placeholder {
                    font-size: 16px;
                }
            }

            @media (min-width: ${sizes.tablet}) {
                padding: 20px 65px;
                font-size: 22px;

                &::placeholder {
                    font-size: 22px;
                }
            }
		}
	}
`;
