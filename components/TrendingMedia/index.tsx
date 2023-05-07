import { ITrending } from "@/types/media.types";
import InputBox from "../InputBox";
import SelectBox from "../SelectBox";
import MovieList from "../MovieList";
import { TrendingMediaStyled } from "./style";

interface ITrendingMediaProps {
	placeholder?: string;
	title: string;
	media: ITrending[];
	hasInput?: boolean;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TrendingMedia = (props: ITrendingMediaProps) => {
	const { placeholder, title, media, onChange, hasInput = false } = props;

	return (
		<TrendingMediaStyled>
			{hasInput && (
				<InputBox
					type={"text"}
					placeholder={placeholder || ''}
					className={"input-box"}
				/>
			)}
			<h3>{title}</h3>
			<SelectBox
				options={["Daily", "Weekly"]}
				className={"select-box"}
				onChange={onChange}
			/>
			<MovieList media={media} />
		</TrendingMediaStyled>
	);
};

export default TrendingMedia;
