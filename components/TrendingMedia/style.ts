import { sizes } from "@/styles/styles";
import styled from "styled-components";

export const TrendingMediaStyled = styled.section`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	h3 {
		margin: 30px 0 10px 0;
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
		font-size: 20px;

		@media (min-width: ${sizes.tablet}) {
			font-size: 28px;
		}

		@media (min-width: ${sizes.desktop}) {
			margin: 50px 0 15px 0;
			font-size: 48px;
		}
	}

	.select-box {
		width: 50%;
		margin-bottom: 20px;

		@media (min-width: ${sizes.tablet}) {
			width: 30%;
		}

		@media (min-width: ${sizes.desktop}) {
			width: 15%;
			margin-bottom: 40px;
		}
	}

	@media (min-width: ${sizes.tablet}) {
		margin-bottom: 50px;
	}
`;
