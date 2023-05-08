import Image from "next/image";
import GoBack from "../GoBack";
import { DetailsPageStyled } from "./style";
import { IMovie, IShow } from "@/types/media.types";

interface IDetailsPageProps {
    media: IMovie | IShow;
}

const DetailsPage = (props: IDetailsPageProps) => {
    const { media } = props;

    if ("title" in media) {
        return (
            <DetailsPageStyled>
                <GoBack />
                <div className="media-details">
                    <Image
                        src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                        alt={`Movie poster for ${media.title}`}
                        width={500}
                        height={750}
                        priority={true}
                        loading={"eager"}
                    />
                    <div className="media-info">
                        <h1>{media.title}</h1>
                        {media.tagline.trim().length > 0 && (
                            <p className="tagline">"{media.tagline}"</p>
                        )}
                        <p>
                            <span>Original Language:</span>{" "}
                            {media.original_language}
                        </p>
                        <p>
                            <span>Release Date:</span> {media.release_date}
                        </p>
                        <p>
                            <span>Budget:</span>{" "}
                            {media.budget !== 0 ? '$' + media.budget.toLocaleString() : 'No data available'}
                        </p>
                        <p>
                            <span>Revenue:</span>{" "}
                            {media.revenue !== 0 ? '$' + media.revenue.toLocaleString() : 'No data available'}
                        </p>
                        <p>
                            <span>Runtime:</span> {media.runtime} minute(s)
                        </p>
                        <p>
                            <span>Description:</span> {media.overview.trim().length > 0 ? media.overview : 'No data available'}
                        </p>
                    </div>
                </div>
            </DetailsPageStyled>
        );
    } else {
        return (
            <DetailsPageStyled>
                <GoBack />
                <div className="media-details">
                    <Image
                        src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
                        alt={`Poster for ${media.name}`}
                        width={500}
                        height={750}
                        priority={true}
                        loading={"eager"}
                    />
                    <div className="media-info">
                        <h1>{media.name}</h1>
                        {media.tagline.trim().length > 0 && (
                            <p className="tagline">"{media.tagline}"</p>
                        )}
                        <p>
                            <span>Original Language:</span>{" "}
                            {media.original_language}
                        </p>
                        <p>
                            <span>First air date:</span> {media.first_air_date}
                        </p>
                        <p>
                            <span>Number of seasons:</span>{" "}
                            {media.number_of_seasons}
                        </p>
                        <p>
                            <span>Number of episodes:</span>{" "}
                            {media.number_of_episodes}
                        </p>
                        <p>
                            <span>Episode runtime:</span>{" "}
                            {media.episode_run_time.length > 0 ? media.episode_run_time[0] + ' minute(s)' : 'No data available'}
                        </p>
                        <p>
                            <span>Description:</span> {media.overview.trim().length > 0 ? media.overview : 'No data available'}
                        </p>
                    </div>
                </div>
            </DetailsPageStyled>
        );
    }
};

export default DetailsPage;
