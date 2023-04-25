import { ArrowIconStyled } from "./style";

interface IArrowIconProps {
	direction?: "up" | "down" | "right";
	color?: string;
    size?: number;
}

const ArrowIcon = (props: IArrowIconProps) => {
	const { direction, color, size } = props;

	return (
		<ArrowIconStyled direction={direction} color={color} size={size}>
			<svg
				width="16"
				height="19"
				viewBox="0 0 16 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.29289 18.7071C7.68342 19.0976 8.31658 19.0976 8.70711 18.7071L15.0711 12.3431C15.4616 11.9526 15.4616 11.3195 15.0711 10.9289C14.6805 10.5384 14.0474 10.5384 13.6569 10.9289L8 16.5858L2.34315 10.9289C1.95262 10.5384 1.31946 10.5384 0.928933 10.9289C0.538408 11.3195 0.538408 11.9526 0.928933 12.3431L7.29289 18.7071ZM7 4.37114e-08L7 18L9 18L9 -4.37114e-08L7 4.37114e-08Z"
					fill="#F5F5F5"
				/>
			</svg>
		</ArrowIconStyled>
	);
};

export default ArrowIcon;
