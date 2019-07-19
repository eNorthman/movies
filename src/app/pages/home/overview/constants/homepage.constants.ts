export const HOMEPAGE_API_CONSTANTS = {
  getMovieByTitle: (title: string): string => `http://www.omdbapi.com/?apikey=&s=${title}&page=2`,
};
