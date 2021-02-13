import { Beer } from "../interface/beer";

export class BeerData {

  static beers: Beer[] = [
    {
      name: "Stella", country: "Belgium", price: 9.50
    }, {
      name: "Sam Adams", country: "USA", price: 8.50
    }, {
      name: "Bud Light", country: "USA", price: 6.50
    }, {
      name: "Brooklyn Lager", country: "USA", price: 8.00
    }, {
      name: "Sapporo", country: "Japan", price: 7.50
    }
  ];
}
