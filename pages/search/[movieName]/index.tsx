import React from "react";
import { useRouter } from "next/router";
import GoBack from "@/components/GoBack";
import InputBox from "@/components/InputBox";
import { SearchStyled } from "./style";
import MediaList from "@/components/MediaList";

const Index = () => {
    const { movieName } = useRouter().query;
    const [media, setMedia] = React.useState([]);
    const [search, setSearch] = React.useState("");

    const router = useRouter();

    const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	}

	const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const preparedString = search.replace(/ /g, "-").toLowerCase();
		router.push(`/search/${preparedString}`);
	}


    React.useEffect(() => {
        const fetchMedia = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
            );
            const data = await response.json();
            setMedia(data.results.slice(0, 6));
        };
        fetchMedia();
    }, [movieName]);

    return (
        <SearchStyled>
            <GoBack />
            <InputBox
                type="text"
                placeholder={"Search for movie or a TV show"}
                className={"search-input"}
                value={search}
                onChange={searchChange}
                onSubmit={searchSubmit}
            />
            <h3>
                <span>Search result for:</span> "
                {movieName?.toString().replace(/-/g, " ")}"
            </h3>
            <div className="results">
                {media.length === 0 ? <h4>No results found</h4> : <MediaList media={media} />}
            </div>
        </SearchStyled>
    );
};

export default Index;
