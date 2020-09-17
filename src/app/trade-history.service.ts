import { Injectable } from '@angular/core';
import {URLs} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TradeHistory} from './trade-history';

@Injectable({
  providedIn: 'root'
})
export class TradeHistoryService {
  private url = URLs.tradeHistoryService;

  constructor(private httpClient: HttpClient) { }
  getAllTradeHistory(): Observable<Array<TradeHistory>> {
    let username = 'jenny';
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: 'amVubnniiJFhbVZ1Ym5rPQ==' });
    let observableResult = this.httpClient.get(this.url + username, {headers: httpHeaders}) as Observable<Array<TradeHistory>>;
    return observableResult;
  }
}
