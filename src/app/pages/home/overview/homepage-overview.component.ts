import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { API_CONSTANTS } from './constants/homepage.constants';
import { MovieApi } from './models/movie-api.model';

@Component({
  templateUrl: './homepage-overview.component.html',
})
export class HomepageOverviewComponent implements OnInit {
  public movies: object[] = [];

  constructor(
    private readonly movieService: MovieService
  ) { }

  public ngOnInit() {

  }

  public searchMovies(movieToFilter: string): void {
    this.getMovieBytitle(movieToFilter);
  }

  private getMovieBytitle(title: string): void {
    const endpoint = API_CONSTANTS.getMovieByTitle(title);
    this.movieService.getAllMovieByTitle(endpoint).subscribe((result: MovieApi) => {
      this.movies = result.Search;
    });
  }

}
