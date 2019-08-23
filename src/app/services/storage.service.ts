import { Injectable } from '@angular/core';
import { Movie } from '../pages/home/overview/models/movie-api.model';

@Injectable()
export class StorageService {

  constructor() {}

  public saveMovieToFavorites(movies: Movie[]): void {
    localStorage.setItem('myMovies', JSON.stringify(movies));
  }

  public addToFavorites(movie: Movie): void {
    movie.Favorite = true;
    const movies: Movie[] = this.getFavoriteMovies();
    const existingMovie = movies.find(favMovie => favMovie.imdbID === movie.imdbID);
    if (!existingMovie) {
      movies.push(movie);
    }
    this.saveMovieToFavorites(movies);
  }

  public removeFromFavorites(movie: Movie): void {
    const movies: Movie[] = this.getFavoriteMovies();
    const existingMovieIndex = movies.findIndex(favMovie => favMovie.imdbID === movie.imdbID);
    movie.Favorite = false;
    if (existingMovieIndex !== -1) {
      movies.splice(existingMovieIndex, 1);
    }
    this.saveMovieToFavorites(movies);
  }

  public getFavoriteMovies(): Movie[] {
    let movies: Movie[] = [];
    try {
      const stringyfiedMovies = localStorage.getItem('myMovies');
      if (stringyfiedMovies) {
        movies = JSON.parse(stringyfiedMovies);
      }
    } catch (error) {
      console.log('there are no movies yet');
    }

    return movies;
  }

}
