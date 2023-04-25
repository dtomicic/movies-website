import { colors, mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const BannerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 185px;
	position: relative;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media (min-width: ${sizes.tablet}) {
		height: 310px;
	}

	@media (min-width: ${sizes.desktop}) {
		height: 700px;
	}
`;

export const HeroText = styled.div`
	position: absolute;
	top: 25%;

	h1 {
		text-align: center;
		color: white;
		font-family: "Montserrat", sans-serif;
		font-size: 20px;
		font-weight: 700;
		max-width: 320px;

		span {
			color: ${colors.secondary};
		}

		@media (min-width: ${sizes.tablet}) {
			font-size: 34px;
			max-width: 600px;
		}

		@media (min-width: ${sizes.desktop}) {
			font-size: 60px;
			max-width: 1000px;
		}
	}
`;

export const HeroArrow = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	bottom: 10%;
	color: white;
	gap: 7px;

	span {
		font-family: "Montserrat", sans-serif;
		font-size: 12px;
		font-weight: 500;

		@media (min-width: ${sizes.tablet}) {
			font-size: 16px;
		}

		@media (min-width: ${sizes.desktop}) {
			font-size: 22px;
		}
	}

	div {
		animation: bounce 1.5s infinite;

		@keyframes bounce {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(5px);
			}
			100% {
				transform: translateY(0);
			}
		}
	}

	@media (min-width: ${sizes.tablet}) {
		gap: 10px;
        bottom: 5%;
	}
`;
