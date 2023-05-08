import { IShow } from "@/types/media.types";
import { GetServerSideProps } from "next";
import DetailsPage from "@/components/DetailsPage";
import Head from "next/head";

interface IMovieDetailsProps {
	show: IShow;
}

const MovieDetails = (props: IMovieDetailsProps) => {
	const { show } = props;
	return (
		<>
			<Head>
				<title>{show.name} | Movie App</title>
			</Head>
			<DetailsPage media={show} />
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

	return {
		props: {
			show: data,
		},
	};
};
