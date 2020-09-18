import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentToken: String;
    title: string;
    currentUserToken: String;
    
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
