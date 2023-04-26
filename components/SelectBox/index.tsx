import { SelectBoxStyled } from "./style";

interface ISelectBoxProps {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = (props: ISelectBoxProps) => {
    const { options, onChange } = props;

    return (
        <SelectBoxStyled>
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
