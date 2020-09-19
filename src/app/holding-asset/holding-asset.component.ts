import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HoldingAssetService} from '../holding-asset.service';
import {HoldingAsset} from '../holding-asset';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URLs} from '../../environments/environment';

@Component({
  selector: 'app-holding-asset',
  templateUrl: './holding-asset.component.html',
  styleUrls: ['./holding-asset.component.css']
})
export class HoldingAssetComponent {

  holdingAsset: Observable<Array<HoldingAsset>>;
  private url = URLs.baseUrl + URLs.tradeEndpoint;

  constructor(holdingAssetService: HoldingAssetService, private httpClient: HttpClient){
    this.holdingAsset = holdingAssetService.getHoldingAsset();
    console.log('Hi from holdingasset component', this.holdingAsset);
  }

  sellHoldingAsset(asset: HoldingAsset): void {
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    const httpHeaders: HttpHeaders = new HttpHeaders({token: currentToken.token });
    const body = {type: 'SELL', ticker: asset.ticker, quantity: asset.inputQuantity, price: asset.price, instrument: asset.instrument};
    this.httpClient.post(this.url, body, {headers: httpHeaders}).subscribe(res => alert('Submitted successfully!'),
      error => alert(error.error));
  }
}
