import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public getAllMovieByTitle(endpoint: string): Observable<object> {
    const request: Observable<object> = this.httpClient.get<object>(endpoint);
    return request.pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
