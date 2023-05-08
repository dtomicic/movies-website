import { IMovie } from "@/types/media.types";
import { GetServerSideProps } from "next";
import DetailsPage from "@/components/DetailsPage";

interface IMovieDetailsProps {
    movie: IMovie;
}

const MovieDetails = (props: IMovieDetailsProps) => {
    const { movie } = props;
    return (
        <DetailsPage media={movie} />
    );
};

export default MovieDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { movieId } = context.query;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        props: {
            movie: data,
        },
    };
};
