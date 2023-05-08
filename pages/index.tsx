import React from "react";
import Banner from "@/components/Banner";
import MainPage from "@/components/MainPage";
import { IMedia } from "@/types/media.types";



export default function Home(props: IMedia) {
	return (
		<>
			<Banner />
			<MainPage {...props} />
		</>
	);
}


export async function getServerSideProps() {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
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


