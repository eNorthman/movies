import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { HOMEPAGE_DETAIL_API_CONSTANTS } from './constants/homepage-detail-constants';
import { MovieApi, Movie } from '../overview/models/movie-api.model';

@Component({
  selector: 'movies-detail',
  templateUrl: './homepage-detail.component.html',
})
export class HomepageDetailComponent implements OnInit {
  @Input() public selectedMovie: Movie;
  public show = true;
  public movie: MovieApi;

  constructor(
    private readonly movieService: MovieService
  ) { }

  public ngOnInit() {
    this.getMovieDetails();
  }

  private getMovieDetails(): void {
    const endpoint = HOMEPAGE_DETAIL_API_CONSTANTS.getMovieDetails(this.selectedMovie.Title);
    this.movieService.getAllMovieByTitle(endpoint).subscribe((result: MovieApi) => {
      this.movie = result;
    });
  }

}
