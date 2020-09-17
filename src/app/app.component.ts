import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {MarketData} from './marketdata';
import {MarketDataService} from './marketdata.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URLs} from '../environments/environment';
import {TradeHistory} from './trade-history';
import {TradeHistoryService} from './trade-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendapp';

  constructor() {}
}
