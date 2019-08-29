import { Component, Input } from '@angular/core';
import { Movie } from '../../pages/home/overview/models/movie-api.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie: Movie;
  // storage service is missing!
  constructor(
    private readonly cardService: CardService,
  ) { }

  public cardClicked(): void {
    this.cardService.openCard(this.movie);
  }

  public updateFavorite(event: Event): void {
    // prevent the event from bubling
    event.stopPropagation();
    // Add logic here to add and remove favorites throught our storage service.
  }
}
