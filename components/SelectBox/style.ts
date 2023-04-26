import { sizes } from "@/styles/styles";
import styled from "styled-components";

export const SelectBoxStyled = styled.div`
	display: flex;
	margin-top: 20px;
	width: 100%;

	select {
		width: 100%;
		border: 1px solid #d4d4d4;
		padding: 10px 15px;
		border-radius: 10px;
		font-family: "Lato", sans-serif;
		font-weight: 600;
		font-size: 14px;

		&:focus {
			outline: none;
			border: 1px solid rgba(255, 59, 63, 0.5);
			box-shadow: 0px 0px 0px 2px rgba(255, 59, 63, 0.2);
		}

        &:hover {
            cursor: pointer;
        }

		option {
			font-family: "Lato", sans-serif;
			font-weight: 500;
			font-size: 14px;

			@media (min-width: ${sizes.desktop}) {
				font-size: 18px;
			}
		}

		@media (min-width: ${sizes.desktop}) {
			font-size: 18px;
		}
	}
`;
