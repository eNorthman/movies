import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Movie } from '../pages/home/overview/models/movie-api.model';
import { StorageService } from './storage.service';


describe('Service: the storage service', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [StorageService]
    });
    service = TestBed.get(StorageService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });


  describe('saveMovieToFavorites method', () => {
    it('should add the movies to localstorage as array', () => {
      const movies: Movie[] = [{
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      }];

      service.saveMovieToFavorites(movies);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify(movies));
    });

    it('should add the movies to localstorage as object', () => {
      const movies: any = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.saveMovieToFavorites(movies);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify(movies));
    });
  });

  describe('addToFavorites method', () => {
    it('should add the movies to localstorage as array', () => {
      const movie: Movie = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.addToFavorites(movie);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify([movie]));
    });

    it('should add the movies to localstorage as array', () => {
      const movie: Movie = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.saveMovieToFavorites([movie]);

      service.addToFavorites(movie);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify([{
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      }]));
    });
  });

  describe('removeFromFavorites method', () => {
    it('should remove the movies to localstorage as array', () => {
      const movie: Movie = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.removeFromFavorites(movie);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify([]));
    });

    it('should remove the movies to localstorage as array', () => {
      const movie: Movie = {
        Title: 'hi',
        Year: '1990',
        imdbID: '123',
        Type: 'movie',
        Poster: 'image',
        Favorite: false
      };

      service.saveMovieToFavorites([movie]);

      service.removeFromFavorites(movie);
      expect(localStorage.getItem('myMovies')).toEqual(JSON.stringify([]));
    });
  });
});

