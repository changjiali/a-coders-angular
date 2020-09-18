import { Injectable } from '@angular/core';
import {URLs} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Portfolio} from './portfolio';

@Injectable({
  providedIn: 'root'
})
// export class PortfolioService {
//   private url = URLs.tradeHistoryService;
//
//   constructor(private httpClient: HttpClient) { }
//   getPortfolio(): Observable<Array<Portfolio>> {
//     let username = 'jack/portfolio';
//     const httpHeaders: HttpHeaders = new HttpHeaders({ token: 'amFja+KIkWFtRmphdz09' });
//     let observableResult = this.httpClient.get(this.url + username, {headers: httpHeaders}) as Observable<Array<Portfolio>>;
//     return observableResult;
//   }
// }
export class PortfolioService {
  // private url = URLs.baseUrl + URLs.tradeHistoryEndPoint;
  private url = URLs.portfolioService;
  constructor(private httpClient: HttpClient) { }
  getPortfolio(): Observable<Array<Portfolio>> {
    // let username = 'jack/portfolio';
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    const username = JSON.parse(localStorage.getItem('username'));
    const httpHeaders: HttpHeaders = new HttpHeaders({token: currentToken});
    let observableResult = this.httpClient.get(this.url + username + '/portfolio', {headers: httpHeaders}) as Observable<Array<Portfolio>>;
    return observableResult;
  }

