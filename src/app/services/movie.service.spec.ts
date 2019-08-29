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
      // GOODLUCK!
    });

    it('should return an error', () => {
      // GOODLUCK!
    });
  });
});

