import { environment } from 'src/environments/environment';

const apiUrl = 'http://www.omdbapi.com/'

export const HOMEPAGE_DETAIL_API_CONSTANTS = {
  getMovieDetails: (title: string = 'Game of Thrones'): string => `${apiUrl}?apikey=${environment.apiKey}&t=${title}`,
};
