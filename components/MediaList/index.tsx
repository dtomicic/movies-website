import { ITrending } from "@/types/media.types";
import { MediaListStyled } from "./style";
import Image from "next/image";

interface IMediaListProps {
	media: ITrending[];
}

const MediaList = (props: IMediaListProps) => {
	const { media } = props;
	return (
		<MediaListStyled>
			{media.map((item, index) => (
				<div key={index}>
                    <div className="overlay">
                        <span>{item.title ? item.title : item.name}</span>
                    </div>
					<Image
						src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
						alt={`Movie poster for ${item.title}`}
						width={500}
						height={750}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
					/>
				</div>
			))}
		</MediaListStyled>
	);
};

export default MediaList;
