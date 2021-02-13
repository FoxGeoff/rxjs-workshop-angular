import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../interface/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  getBeers(): Observable<Beer[]> {
    return null;
  }
}
