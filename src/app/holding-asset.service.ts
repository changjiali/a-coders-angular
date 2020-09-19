import { Injectable } from '@angular/core';
import {URLs} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Portfolio} from './portfolio';
import {HoldingAsset} from './holding-asset';

@Injectable({
  providedIn: 'root'
})
export class HoldingAssetService {

  private url = URLs.baseUrl + URLs.tradeHistoryEndpoint;

  constructor(private httpClient: HttpClient) { }

  getHoldingAsset(): Observable<Array<HoldingAsset>> {
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    const username = JSON.parse(localStorage.getItem('username'));
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: currentToken.token });
    console.log(currentToken);
    console.log(currentToken.token);
    let observableResult = this.httpClient.get(this.url + username + '/holdingStock', {headers: httpHeaders}) as Observable<Array<HoldingAsset>>;
    return observableResult;
  }
}
