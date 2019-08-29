import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from './models/movie-api.model';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './homepage-overview.component.html',
})
export class HomepageOverviewComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public selectedMovie: Movie;
  // *hint* subsciption can be used to store an observable and to unsubscribe.
  private subscription: Subscription;
  // DI alert! constructor is used ~!~
  constructor() { }

  public ngOnInit() {

  }

  public ngOnDestroy() {
    // dont forget to unsubscribe on destroy!!
  }

  public searchMovies(movieToFilter: string): void {
    this.getMovieBytitle(movieToFilter);
  }

  private getMovieBytitle(title: string): void {
    // create the api call to search the movie
  }

}
