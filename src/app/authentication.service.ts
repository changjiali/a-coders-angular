import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/operators';
import {URLs} from '../environments/environment';
//mport { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentToken: Observable<any>;
    public currentUserToken: BehaviorSubject<String>;
    private url = URLs.baseUrl + URLs.loginEndpoint;

    constructor(private http: HttpClient) {
        this.currentUserToken = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('currentToken')));
        this.currentToken = this.currentUserToken.asObservable();
    }

    public get currentUserValue(): String {
        return this.currentUserToken.value;

    }

    login(username, password) {
        console.log("before login")
        let params = new HttpParams();
        params = params.append('username', username);
        params = params.append('password', password);
        return this.http.get<any>(this.url, {params})
            .pipe(map((token : string) => {
                // store token in local storage to keep user logged in between page refreshes
                console.log("authentication.service token" , token);
                localStorage.setItem('currentToken', JSON.stringify(token));
                localStorage.setItem('username', JSON.stringify(username));
                this.currentUserToken.next(String(token));
                console.log(token);
                return token;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentToken');
        localStorage.removeItem('username');
        this.currentUserToken.next(null);
    }
}


