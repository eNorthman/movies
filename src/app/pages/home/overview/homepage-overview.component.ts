import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { API_CONSTANTS } from './constants/homepage.constants';
import { MovieApi, Movie } from './models/movie-api.model';
import { CardService, CardObject } from 'src/app/services/card.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './homepage-overview.component.html',
})
export class HomepageOverviewComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public show = false;
  public selectedMovie: Movie;

  private subscription: Subscription;

  constructor(
    private readonly movieService: MovieService,
    private readonly cardService: CardService
  ) { }

  public ngOnInit() {
    this.subscription = this.cardService.cardClicked$.subscribe((cardObject: CardObject) => {
      if (cardObject.show) {
        // open card here
        this.show = cardObject.show;
        this.selectedMovie = cardObject.movie;
      } else {
        // close card here.
      }
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public searchMovies(movieToFilter: string): void {
    this.getMovieBytitle(movieToFilter);
  }

  private getMovieBytitle(title: string): void {
    const endpoint = API_CONSTANTS.getMovieBySearch(title);
    this.movieService.getAllMovieByTitle(endpoint).subscribe((result: MovieApi) => {
      this.movies = result.Search;
    });
  }

}
