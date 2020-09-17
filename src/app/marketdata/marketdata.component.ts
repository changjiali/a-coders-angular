import {Component, Input, OnInit} from '@angular/core';
import {MarketData} from '../marketdata';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MarketDataService} from '../marketdata.service';
import {URLs} from '../../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-marketdata',
  templateUrl: './marketdata.component.html',
  styleUrls: ['./marketdata.component.css']
})
export class MarketdataComponent {

  private url = URLs.tradeService;

  @Input()
  theMarketData: MarketData;

  marketData: Observable<Array<MarketData>>;

  constructor(marketdataService: MarketDataService, private httpClient: HttpClient){
    this.marketData = marketdataService.getAllMarketData();
  }

  tradeCreation(data: MarketData): void {
    const httpHeaders: HttpHeaders = new HttpHeaders({ token: 'amFuaWNl4oiRYW1GdWFXTmw=' });
    const body = {type: 'SELL', ticker: data.ticker, quantity: data.quantity, price: data.quotePrice, instrument: data.instrument};
    this.httpClient.post(this.url, body, {headers: httpHeaders}).subscribe((val) => {console.log('POST SUCCESS', val); },
      response => {
        console.log('POST call in error', response); },
      () => {
        console.log('POST is completed');
      });
  }
}
