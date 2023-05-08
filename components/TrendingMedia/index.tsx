import { ITrending } from "@/types/media.types";
import SelectBox from "../SelectBox";
import MediaList from "../MediaList";
import { TrendingMediaStyled } from "./style";

interface ITrendingMediaProps {
	title: string;
	media: ITrending[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TrendingMedia = (props: ITrendingMediaProps) => {
	const { title, media, onChange} = props;

	return (
		<TrendingMediaStyled>
			<h3>{title}</h3>
			<SelectBox
				options={["Daily", "Weekly"]}
				className={"select-box"}
				onChange={onChange}
			/>
			<MediaList media={media} />
		</TrendingMediaStyled>
	);
};

export default TrendingMedia;
