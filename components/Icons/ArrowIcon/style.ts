import styled from "styled-components";

interface IProps {
    direction?: "up" | "down" | "right";
	color?: string;
    size?: number;
}
export const ArrowIconStyled = styled.div<IProps>`
    display: flex;

    svg {
        width: ${(props) => props.size || 20}px;
        height: ${(props) => props.size || 20}px;
        transform: ${(props) => {
            switch (props.direction) {
                case "up":
                    return "rotate(180deg)";
                case "down":
                    return "rotate(0deg)";
                case "right":
                    return "rotate(-90deg)";
                default:
                    return "rotate(90deg)";
            }
        }};

        path {
            fill: ${(props) => props.color || "white"};
        }
    }
`;
