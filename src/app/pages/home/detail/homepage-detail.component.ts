import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { HOMEPAGE_DETAIL_API_CONSTANTS } from './constants/homepage-detail-constants';
import { MovieApi, Movie, MovieDetail } from '../overview/models/movie-api.model';

@Component({
  selector: 'movies-detail',
  templateUrl: './homepage-detail.component.html',
})
export class HomepageDetailComponent implements OnInit {
  @Input() public selectedMovie: Movie;
  public show = true;
  public movie: MovieDetail;

  constructor(
    private readonly movieService: MovieService
  ) { }

  public ngOnInit() {
    this.getMovieDetails();
  }

  private getMovieDetails(): void {
   this.movie = {
    Actors: 'Gene Hackman, Danny Glover, Jerry Reed, David Marshall Grant',
    Awards: '1 nomination.',
    BoxOffice: 'N/A',
    Country: 'USA',
    Director: 'Peter Markle',
    Genre: 'Drama, War',
    Language: 'English',
    Metascore: '58',
    Plot: 'During the Vietnam War, Colonel Hambletons aircraft is shot down over enemy territory and a frantic rescue operation ensues.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYzgyMDVlMGUtZDAzNy00MmM3LWE5MDgtNzkxOGMyYTkxNDlhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg',
    Production: 'Media Home Entertainment',
    Rated: 'R',
    Ratings: [],
    Released: '21 Oct 1988',
    Title: 'Bat*21',
    Type: 'movie',
    Writer: 'William C. Anderson (book), William C. Anderson (screenplay), George Gordon (screenplay)',
    Year: '1988',
    imdbID: 'tt0094712',
    imdbRating: '6.4',
    imdbVotes: '7,347'
   };
  }

}
