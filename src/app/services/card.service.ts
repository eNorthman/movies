import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CardService {
  public cardClicked$: Observable<boolean>;

  private $cardClicked: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.cardClicked$ = this.$cardClicked.asObservable();
  }

  public openCard(): void {
    this.$cardClicked.next(true);
  }

  public closeCard(): void {
    this.$cardClicked.next(false);
  }
}
