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

  private url = URLs.tradeHistoryService;

  constructor(private httpClient: HttpClient) { }

  getHoldingAsset(): Observable<Array<HoldingAsset>> {
    let username = 'jack/holdingStock';
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: 'amFja+KIkWFtRmphdz09' });
    let observableResult = this.httpClient.get(this.url + username, {headers: httpHeaders}) as Observable<Array<HoldingAsset>>;
    return observableResult;
  }
}
