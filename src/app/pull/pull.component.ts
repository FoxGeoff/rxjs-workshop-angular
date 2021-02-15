import { Component, OnInit } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BeerService } from '../beer/beer.service';
import { Beer } from '../interface/beer';

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.css']
})
export class PullComponent implements OnInit {

  beers$: Observable<Beer[]>;
  errorMessage = '';

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers()
      .subscribe(
        (data: any[]) => console.log(data),
        (err: any) => console.log(err),
        () => console.log(`Done!`)
      );
  }

}
