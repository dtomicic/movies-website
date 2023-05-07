import { mixins, sizes } from "@/styles/styles";
import styled from "styled-components";

export const MainPageStyled = styled.section`
	${mixins.contentWide};
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	gap: 20px;

	@media (min-width: ${sizes.tablet}) {
		gap: 100px;
	}
`;
