export interface MovieApi {
  Search: Movie[];
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Favorite?: boolean;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  Released: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: StringConstructor;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
