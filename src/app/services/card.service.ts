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
  // a subject is a special type of Observable which can communicate to multiple Observers.
  // From the docs: A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
  private $cardClicked: Subject<CardObject> = new Subject<CardObject>();

  constructor() {}

  public openCard(movie: Movie): void {
    // throw an open event
  }

  public closeCard(): void {
    // throw an closed event
  }
}
