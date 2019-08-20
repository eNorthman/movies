import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../pages/home/overview/models/movie-api.model';

export interface CardObject {
  show: boolean;
  movie?: Movie;
}

@Injectable()
export class CardService {
  public cardClicked$: Observable<CardObject>;

  private $cardClicked: Subject<CardObject> = new Subject<CardObject>();

  constructor() {
    this.cardClicked$ = this.$cardClicked.asObservable();
  }

  public openCard(movie: Movie): void {
    this.$cardClicked.next({show: true, movie});
  }

  public closeCard(): void {
    this.$cardClicked.next({show: false});
  }
}
