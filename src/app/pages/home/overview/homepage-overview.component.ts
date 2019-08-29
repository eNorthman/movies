import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from './models/movie-api.model';

@Component({
  templateUrl: './homepage-overview.component.html',
})
export class HomepageOverviewComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public mockMovies: Movie[] = [
    {
      Title: 'batman',
      Year: '1990',
      imdbID: '123456',
      Type: 'Movie',
      Poster: 'should be an image',
      Favorite: false
    },
    {
      Title: 'bat',
      Year: '1992',
      imdbID: '987654',
      Type: 'Movie',
      Poster: 'should be an image',
      Favorite: false
    }
  ];

  constructor() { }

  public ngOnInit() {}

  public ngOnDestroy() {}

  public searchMovies(): void {
    // This method should handle the output of the search component
  }
}
