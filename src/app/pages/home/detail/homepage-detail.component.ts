import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
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
    // connect to get the details.
  }

}
