import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { Movie } from '../pages/home/overview/models/movie-api.model';


describe('Service: the card service', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CardService]
    });
    service = TestBed.get(CardService);
  });


  describe('openCard method', () => {
    it('should return true when openCard is called', () => {
      const movie: Movie = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.cardClicked$.subscribe((response) => {
        expect(response).toEqual({show: true, movie});
      });

      service.openCard(movie);
    });
  });

  describe('closedCard method', () => {
    it('should return false when closedCard is called', () => {
      service.cardClicked$.subscribe((response) => {
        expect(response).toEqual({show: false});
      });

      service.closeCard();
    });
  });
});

