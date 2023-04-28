import React from "react";
import Banner from "@/components/Banner";
import { ITrending } from "@/types/media.types";
import MovieList from "@/components/MovieList";

interface IHomeProps {
	movies: {
		daily: ITrending[];
		weekly: ITrending[];
	};
	shows: {
		daily: ITrending[];
		weekly: ITrending[];
	};
}

export default function Home(props: IHomeProps) {
	const { movies, shows } = props;

	const [moviesList, setMoviesList] = React.useState(movies.daily.slice(0, 6));
	const [showsList, setShowsList] = React.useState(shows.daily.slice(0, 6));

	return (
		<>
			<Banner />
			<MovieList media={showsList} />
		</>
	);
}

export async function getServerSideProps() {
	const API_KEY = process.env.API_KEY;
	const urls = [
		`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
		`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
		`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`,
		`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
	];

	const responses = await Promise.all(urls.map((url) => fetch(url)));
	const data = await Promise.all(responses.map((res) => res.json()));

	return {
		props: {
			movies: {
				daily: data[0].results,
				weekly: data[1].results,
			},
			shows: {
				daily: data[2].results,
				weekly: data[3].results,
			},
		},
	};
}
