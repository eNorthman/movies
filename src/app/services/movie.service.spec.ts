import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';


describe('Service: the movie service', () => {
  let httpTestingController: HttpTestingController;
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  describe('getAllMovieByTitle method', () => {
    it('should return the data as serviceModel', () => {
      const mockMovies = [
        {
          Title: 'hi',
          Year: '1990',
          imdbID: '123',
          Type: 'movie',
          Poster: 'image',
          Favorite: false
        },
      ];


      service.getAllMovieByTitle('http://localhost:8089/test').subscribe((response) => {
        expect(response).toEqual(mockMovies);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:8089/test'
      );

      req.flush(mockMovies);
    });

    it('should return an error', () => {
      const mockErrorResponse = { status: 500, statusText: 'some error' };


      service.getAllMovieByTitle('http://localhost:8089/test').subscribe((response) => {
        expect(response).toBeUndefined();
      }, error => {
        expect(error.status).toEqual(500);
        expect(error.statusText).toEqual('some error');
      });

      const req = httpTestingController.expectOne(
        'http://localhost:8089/test'
      );

      req.flush(null, mockErrorResponse);
    });
  });
});

