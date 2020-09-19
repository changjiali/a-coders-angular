import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MarketData} from './marketdata';
import {URLs, environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private url = environment.baseUrl + URLs.marketDataEndpoint;
  constructor(private httpClient: HttpClient) {}

  getAllMarketData(): Observable<Array<MarketData>> {
    let observableResult = this.httpClient.get(this.url) as Observable<Array<MarketData>>;
    return observableResult;
  }
}
