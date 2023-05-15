import React from "react";
import Head from "next/head";
import { IMovie, ITrending } from "@/types/media.types";
import { GetServerSideProps } from "next";
import DetailsPage from "@/components/DetailsPage";

interface IMovieDetailsProps {
    movie: IMovie;
    relatedMovies: ITrending[];
}

const MovieDetails = (props: IMovieDetailsProps) => {
    const { movie, relatedMovies } = props;
    return (
        <>
        <Head>
            <title>{movie.title} | Movie App</title>
        </Head>
        <DetailsPage media={movie} relatedMedia={relatedMovies} />
    </>
    );
};

export default MovieDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { movieId } = context.query;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();

    const urlRelated = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const responseRelated = await fetch(urlRelated);
    const dataRelated = await responseRelated.json();

    return {
        props: {
            movie: data,
            relatedMovies: dataRelated.results.filter((movie: IMovie) => movie.poster_path !== null).splice(0, 6),
        },
    };
};
