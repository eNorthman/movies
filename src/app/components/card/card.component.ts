import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../pages/home/overview/models/movie-api.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;
  public favorite = false;

  constructor(private readonly cardService: CardService) { }

  public ngOnInit() {
  }

  public cardClicked(): void {
    this.cardService.openCard();
  }

}
