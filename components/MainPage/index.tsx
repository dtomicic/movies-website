import React from "react";
import { useRouter } from "next/router";
import { IMedia } from "@/types/media.types";
import { MainPageStyled } from "./style";
import TrendingMedia from "../TrendingMedia";
import InputBox from "../InputBox";

const MainPage = (props: IMedia) => {
    const { movies, shows } = props;
	const router = useRouter();

    const [moviesList, setMoviesList] = React.useState(
        movies.daily.slice(0, 6)
    );
    const [showsList, setShowsList] = React.useState(shows.daily.slice(0, 6));

    const [moviesSelect, setMoviesSelect] = React.useState("Daily");
    const [showsSelect, setShowsSelect] = React.useState("Daily");

	const [search, setSearch] = React.useState("");

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

	const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	}

	const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const preparedString = search.replace(/ /g, "-").toLowerCase();
		router.push(`/search/${preparedString}`);
	}

    return (
        <MainPageStyled>
            <InputBox
                type={"text"}
                placeholder={"Search for movie or a TV show"}
                className={"input-box"}
				value={search}
				onChange={searchChange}
				onSubmit={searchSubmit}
            />
            <TrendingMedia
                title={"Explore trending movies"}
                media={moviesList}
                onChange={movieSelectChange}
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
