import { environment } from 'src/environments/environment';

export const API_CONSTANTS = {
  getMovieByTitle: (title: string): string => `http://www.omdbapi.com/?apikey=${environment.apiKey}&s=${title}&page=2`,
};
