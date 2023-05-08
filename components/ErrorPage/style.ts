import { colors, sizes } from "@/styles/styles";
import styled from "styled-components";

export const ErrorPageStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	img {
		width: 100%;
		height: auto;
		display: block;

        @media (min-width: ${sizes.tablet}) {
            width: 50%;
        }

        @media (min-width: ${sizes.desktop}) {
            width: 30%;
        }
	}

	h1 {
		font-size: 30px;
		color: ${colors.secondary};
		font-family: "Montserrat", sans-serif;
		font-weight: 600;
		margin-top: 30px;
	}

	.buttons {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 20px;

		button {
			background-color: transparent;
			border: 2px solid ${colors.secondary};
			border-radius: 20px;
			padding: 10px 30px;
			font-family: "Lato", sans-serif;
			font-weight: 600;
            font-size: 14px;

            &:hover {
                cursor: pointer;
            }
		}

		a {
			background-color: ${colors.primary};
			border: 2px solid ${colors.primary};
            color: ${colors.backgroundColor};
			border-radius: 20px;
			padding: 10px 30px;
			font-family: "Lato", sans-serif;
			font-weight: 600;
            font-size: 14px;
		}
	}
`;
