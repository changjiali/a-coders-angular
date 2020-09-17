// import { Component } from '@angular/core';
// import {Observable} from 'rxjs';
// import {MarketData} from './marketdata';
// import {MarketDataService} from './marketdata.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {URLs} from '../environments/environment';
// import {TradeHistory} from './trade-history';
// import {TradeHistoryService} from './trade-history.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'frontendapp';

//   constructor() {}
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
//import { User } from './_models';

//import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    //urrentUser: User;
    currentToken: String;
    title: string;
    
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentToken.subscribe(x => this.currentToken = x);
        this.title = "Lion Trading Platform"
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
