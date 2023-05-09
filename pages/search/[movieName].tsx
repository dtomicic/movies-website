import React from "react";
import { useRouter } from "next/router";
import SearchPage from "@/components/SearchPage";

const Index = () => {
    const { movieName } = useRouter().query;
    const [media, setMedia] = React.useState([]);


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
       <SearchPage media={media} />
    );
};

export default Index;
