import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BeerService } from '../beer/beer.service';
import { Beer } from '../interface/beer';

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.css']
})
export class PullComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {

  }

  getBeers(): Observable<Beer[]> {
     
    return from([...beers ]);
  }

}
