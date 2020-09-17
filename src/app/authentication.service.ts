import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/operators';
import {URLs} from '../environments/environment';
//mport { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    //private currentUserSubject: BehaviorSubject<User>;
    //private currentUserToken: BehaviorSubject<String>;
    //public currentUser: Observable<User>;
    public currentToken: Observable<any>;
    public currentUserToken: BehaviorSubject<String>;
    private url = URLs.loginService;

    constructor(private http: HttpClient) {
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserToken = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('currentUserToken')));
        //this.currentUser = this.currentUserSubject.asObservable();
        this.currentToken = this.currentUserToken.asObservable();
    }

    //public get currentUserValue(): String {
        //return this.currentUserSubject.value;
        //return this.currentUserToken.value;

    //}

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
                //this.currentUserToken.next(String(token));
                console.log(token);
                return token;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentToken');
        localStorage.removeItem('username');
        //this.currentUserToken.next(null);
    }
}


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
  
//   public currentToken: Observable<any>;
//   constructor(private httpClient: HttpClient) {}

//   login(username:string,password:string) {
//     let params = new HttpParams();
//     params = params.append('username', username);
//     params = params.append('password', password);
//     let observableResult = this.httpClient.get<any>(`http://ip172-18-0-28-bthbjdqosm4g00bq0ptg-8080.direct.labs.play-with-docker.
//     com/api/auth/login`, {params}) as Observable<any>
//     // .pipe(
//     //     catchError((err) => {
//     //         console.log('error caught in service')
//     //         console.error(err);
//     //         return throwError(err);    //Rethrow it back to component
//     //     })
//     // )
//     console.log("login success")
//     console.log(observableResult)
//     localStorage.setItem('currentToken', String(observableResult));
//   }

//   logout(){
//     localStorage.removeItem('currentToken'); 
//   }

// }

// return this.httpClient.get(`https://reqres.in/api/users`).
//         pipe(
//            map((data: Users[]) => {
//              return data;
//            }), catchError( error => {
//              return throwError( 'Something went wrong!' );
//            })


// getAllMarketData(): Observable<Array<MarketData>> {
//   let observableResult = this.httpClient.get(this.url) as Observable<Array<MarketData>>;
//   return observableResult;
// }

