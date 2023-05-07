import React from "react";
import { IMedia } from "@/types/media.types";
import { MainPageStyled } from "./style";
import TrendingMedia from "../TrendingMedia";

const MainPage = (props: IMedia) => {
	const { movies, shows } = props;

	const [moviesList, setMoviesList] = React.useState(
		movies.daily.slice(0, 6)
	);
	const [showsList, setShowsList] = React.useState(shows.daily.slice(0, 6));

	const [moviesSelect, setMoviesSelect] = React.useState("Daily");
	const [showsSelect, setShowsSelect] = React.useState("Daily");

	const movieSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setMoviesSelect(event.target.value);
		if (event.target.value === "Daily") {
			setMoviesList(movies.daily.slice(0, 6));
		} else {
			setMoviesList(movies.weekly.slice(0, 6));
		}
	};

	const showSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setShowsSelect(event.target.value);
		if (event.target.value === "Daily") {
			setShowsList(shows.daily.slice(0, 6));
		} else {
			setShowsList(shows.weekly.slice(0, 6));
		}
	};

	return (
		<MainPageStyled>
			<TrendingMedia
				placeholder={"Search for movie or a TV show"}
				title={"Explore trending movies"}
				media={moviesList}
				onChange={movieSelectChange}
				hasInput={true}
			/>
			<TrendingMedia
				title={"Explore trending TV shows"}
				media={showsList}
				onChange={showSelectChange}
			/>
		</MainPageStyled>
	);
};

export default MainPage;
