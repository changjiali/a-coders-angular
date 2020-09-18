import { Injectable } from '@angular/core';
import {URLs} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Portfolio} from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url = URLs.baseUrl + URLs.tradeHistoryEndPoint;

  constructor(private httpClient: HttpClient) { }
  getPortfolio(): Observable<Array<Portfolio>> {
    let username = 'jack/portfolio';
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: 'amFja+KIkWFtRmphdz09' });
    let observableResult = this.httpClient.get(this.url + username, {headers: httpHeaders}) as Observable<Array<Portfolio>>;
    return observableResult;
  }
}
