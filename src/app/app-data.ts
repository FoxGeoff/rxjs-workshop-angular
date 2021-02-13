/**
 * Run: npm i angular-in-memory-web-api
 *
 * Ref: <https://www.npmjs.com/package/angular-in-memory-web-api>

    LIMITATIONS

    The in-memory-web-api exists primarily to support the Angular documentation.
    It is not supposed to emulate every possible real world web API and is not intended for production use.

    Most importantly, it is always experimental.
    We will make breaking changes and we won't feel bad about it because this is a development tool,
    not a production product. We do try to tell you about such changes in the CHANGELOG.md and
    we fix bugs as fast as we can.

 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BeerData } from './beer/beer-data';
import { Beer } from './interface/beer';

export class AppData implements InMemoryDbService {

  createDb(): { beers: Beer[], count: number } {
    const beers = BeerData.beers;
    const count = beers.length;
    return { beers, count };
  }

}
