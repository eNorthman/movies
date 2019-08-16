import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movies-detail',
  templateUrl: './homepage-detail.component.html',
})
export class HomepageDetailComponent implements OnInit {
  public show = true;

  public poster = 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg';
  public title = 'Batman Begins';
  public year = '2005';
  public synopsis = 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.';
  public actors = 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes';

  constructor(
    private readonly movieService: MovieService
  ) { }

  public ngOnInit() {

  }

}
