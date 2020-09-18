import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PortfolioService} from '../portfolio.service';
import {Portfolio} from '../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
    portfolio: Observable<Array<Portfolio>>;

    constructor(portfolioService: PortfolioService){
      this.portfolio = portfolioService.getPortfolio();
      console.log('Hi from portfolio component', this.portfolio);
    }

}



