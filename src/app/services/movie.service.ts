import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  constructor() {}

  public getAllMovieByTitle(endpoint: string): Observable<object> {
    return;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
   return;
  }
}
