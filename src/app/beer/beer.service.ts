import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Beer } from '../interface/beer';


/**
     *  Ref.: <https://www.techiediaries.com/angular-inmemory-web-api/>
     *
     * The angular-in-memory-web-api module provides an in memory data
     * store where you can create and fetch data and simulates a real
     * REST API back-end. It intercepts Angular HttpClient requests that
     * would otherwise go to the remote server and redirects them to
     * an in-memory data store that you control.
     *
     * It works as a proxy for your real back-end. Each time you send
     * an HTTP request, the module intercepts it, process it and returns
     * the results from memory. This way, when you are ready to use
     * a real API back-end you will not be required to change the API
     * endpoints you added in your Angular code.
     */

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private BEERS_URL: string = "api/beers";

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.BEERS_URL)
      .pipe(
        tap(data => console.log(`Beers: `, JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
