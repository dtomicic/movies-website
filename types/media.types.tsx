export interface ITrending {
    id: number;
    title: string;
    name: string;
    overview: string;
    poster_path: string;
    media_type: string;
}

export interface IMovie {
    title: string;
    original_language: string;
    release_date: string;
    budget: number;
    revenue: number;
    runtime: number;
    tagline: string;
    overview: string;
    poster_path: string;
    media_type: string;
}

export interface IShow {
    original_language: string;
    first_air_date: string;
    number_of_seasons: number;
    number_of_episodes: number;
    episode_run_time: number[];
    tagline: string;
    overview: string;
    poster_path: string;
    media_type: string;
    name: string;
}

export interface IMedia {
    movies: {
        daily: ITrending[];
        weekly: ITrending[];
    }
    shows: {
        daily: ITrending[];
        weekly: ITrending[];
    }
}
