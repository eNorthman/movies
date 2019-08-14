import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  templateUrl: './homepage-detail.component.html',
})
export class HomepageDetailComponent implements OnInit {

  constructor(
    private readonly movieService: MovieService
  ) { }

  public ngOnInit() {

  }

}
