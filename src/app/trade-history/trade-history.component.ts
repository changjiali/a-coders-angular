import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TradeHistory} from '../trade-history';
import {TradeHistoryService} from '../trade-history.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent {
  tradeHistory: Observable<Array<TradeHistory>>;

  constructor(tradeHistoryService : TradeHistoryService){
    this.tradeHistory = tradeHistoryService.getAllTradeHistory();
  }

}
