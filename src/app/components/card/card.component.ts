import { Component } from '@angular/core';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // think about how to communicate, using inputs, outputs or perhaps a service.

  constructor() {}

  public cardClicked(): void {}

  public updateFavorite(event: Event): void {}
}
