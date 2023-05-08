import { ITrending } from "@/types/media.types";
import { MediaListStyled } from "./style";
import Image from "next/image";
import Link from "next/link";

interface IMediaListProps {
    media: ITrending[];
}

const MediaList = (props: IMediaListProps) => {
    const { media } = props;
    return (
        <MediaListStyled>
            {media.map((item, index) => (
                <div key={index}>
                    <Link
                        href={
                            item.media_type === "movie"
                                ? `/movie/${item.id}`
                                : `/tv/${item.id}`
                        }
                    >
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
                    </Link>
                </div>
            ))}
        </MediaListStyled>
    );
};

export default MediaList;
