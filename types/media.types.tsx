export interface ITrending {
    title: string;
    name: string;
    overview: string;
    poster_path: string;
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
