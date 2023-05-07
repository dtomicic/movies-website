import MagnifierIcon from "../Icons/MagnifierIcon";
import { InputBoxStyled } from "./style";

interface IInputBoxProps {
	type: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	className?: string;
}

const InputBox = (props: IInputBoxProps) => {
	const { type, placeholder, value, onChange, onSubmit, className } = props;
	return (
		<InputBoxStyled onSubmit={onSubmit} className={className || ""}>
			<div className="input-container">
				<button type="submit">
					<MagnifierIcon />
				</button>
				<input
					type={type}
					placeholder={placeholder || ""}
					value={value}
					onChange={onChange}
				/>
			</div>
		</InputBoxStyled>
	);
};

export default InputBox;
