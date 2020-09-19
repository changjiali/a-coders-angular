import { Injectable } from '@angular/core';
import {URLs, environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Portfolio} from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url = environment.baseUrl + URLs.portfolioEndpoint;

  constructor(private httpClient: HttpClient) { }
  getPortfolio(): Observable<Array<Portfolio>> {
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    const username = JSON.parse(localStorage.getItem('username'));
    const httpHeaders: HttpHeaders = new HttpHeaders({token: currentToken.token});
    console.log(httpHeaders);
    console.log(username);
    console.log(currentToken);
    console.log(currentToken.token);
    const observableResult = this.httpClient.get(this.url + username + '/portfolio', {headers: httpHeaders}) as Observable<Array<Portfolio>>;
    return observableResult;
  }
}

