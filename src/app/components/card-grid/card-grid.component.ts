import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/pages/home/overview/models/movie-api.model';

@Component({
  selector: 'movies-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  @Input() movies: Movie[];

}
