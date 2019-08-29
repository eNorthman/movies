import { environment } from 'src/environments/environment';

const apiUrl = 'https://www.omdbapi.com/';

export const API_CONSTANTS = {
  getMovieBySearch: (title: string, type: string = 'movie'): string => `${apiUrl}?apikey=${environment.apiKey}&s=${title}&page=1&type=${type}`,
  getMovieDetails: (title: string = 'Game of Thrones'): string => `${apiUrl}?apikey=${environment.apiKey}&t=${title}`,
};
