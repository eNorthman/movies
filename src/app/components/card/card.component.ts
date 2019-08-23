import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../pages/home/overview/models/movie-api.model';
import { CardService } from 'src/app/services/card.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private readonly cardService: CardService,
    private readonly storageService: StorageService
  ) { }

  public ngOnInit() {
  }

  public cardClicked(): void {
    this.cardService.openCard(this.movie);
  }

  public updateFavorite(event: Event): void {
    event.stopPropagation();
    if (this.movie.Favorite) {
      this.storageService.removeFromFavorites(this.movie);
    } else {
      this.storageService.addToFavorites(this.movie);
    }
  }
}
