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
    //let username = 'jenny';
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    const username = JSON.parse(localStorage.getItem('username'));
    const httpHeaders: HttpHeaders = new HttpHeaders({token: currentToken.token });
    //console.log(username.username);
    //console.log(username);
    let observableResult = this.httpClient.get(this.url + username, {headers: httpHeaders}) as Observable<Array<TradeHistory>>;
    return observableResult;
  }
}
