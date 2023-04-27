import React from "react";
import Banner from "@/components/Banner";
import { ITrendingMovie, ITrendingShow } from "@/types/media.types";

interface IHomeProps {
	dailyMovies: ITrendingMovie[];
	weeklyMovies: ITrendingMovie[];
	dailyShows: ITrendingShow[];
	weeklyShows: ITrendingShow[];
}

export default function Home(props: IHomeProps) {
	const { dailyMovies, weeklyMovies, dailyShows, weeklyShows } = props;
	const [dailyTrendingMovies, setDailyTrendingMovies] = React.useState(dailyMovies);
	const [weeklyTrendingMovies, setWeeklyTrendingMovies] = React.useState(weeklyMovies);
	const [dailyTrendingShows, setDailyTrendingShows] = React.useState(dailyShows);
	const [weeklyTrendingShows, setWeeklyTrendingShows] = React.useState(weeklyShows);

	console.log(dailyTrendingMovies);
	return (
		<>
			<Banner />
		</>
	);
}

export async function getServerSideProps() {
	const API_KEY = process.env.API_KEY;
	
	const dailyTrendingMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then((res) => res.json());
	const weeklyTrendingMovies = await fetch(`
	https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then((res) => res.json());

	const dailyTrendingShows = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`).then((res) => res.json());
	const weeklyTrendingShows = await fetch(`
	https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`).then((res) => res.json());


	return {
		props: {
			dailyMovies: dailyTrendingMovies.results,
			weeklyMovies: weeklyTrendingMovies.results,
			dailyShows: dailyTrendingShows.results,
			weeklyShows: weeklyTrendingShows.results,
		}
	}
}