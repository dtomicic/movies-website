import { SelectBoxStyled } from "./style";

interface ISelectBoxProps {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}

const SelectBox = (props: ISelectBoxProps) => {
    const { options, onChange, className } = props;

    return (
        <SelectBoxStyled className={className || ""}>
            <select onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </SelectBoxStyled>
    )
}

export default SelectBox;
