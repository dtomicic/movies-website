import React from "react";
import { useRouter } from "next/router";
import Head from "next/head"
import GoBack from "../GoBack"
import { SearchPageStyled } from "./style";
import InputBox from "../InputBox";
import MediaList from "../MediaList";
import { ITrending } from "@/types/media.types";

interface ISearchPageProps {
    media: ITrending[];
}

const SearchPage = (props: ISearchPageProps) => {
    const { media } = props;
    const { movieName } = useRouter().query;
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
    return (
        <SearchPageStyled>
            <Head>
                <title>Search | Movie App</title>
            </Head>
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
        </SearchPageStyled>
    );
};

export default SearchPage;