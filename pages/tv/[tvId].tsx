import { IShow, ITrending } from "@/types/media.types";
import { GetServerSideProps } from "next";
import DetailsPage from "@/components/DetailsPage";
import Head from "next/head";

interface IMovieDetailsProps {
	show: IShow;
	relatedShows: ITrending[];
}

const MovieDetails = (props: IMovieDetailsProps) => {
	const { show, relatedShows } = props;
	return (
		<>
			<Head>
				<title>{show.name} | Movie App</title>
			</Head>
			<DetailsPage media={show} relatedMedia={relatedShows} />
		</>
	);
};

export default MovieDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { tvId } = context.query;
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

	const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`;
	const response = await fetch(url);
	const data = await response.json();

	
    const urlRelated = `https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const responseRelated = await fetch(urlRelated);
    const dataRelated = await responseRelated.json();

	return {
		props: {
			show: data,
			relatedShows: dataRelated.results.filter((show: IShow) => show.poster_path !== null).splice(0, 6),
		},
	};
};
