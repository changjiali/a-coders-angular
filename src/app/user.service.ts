import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URLs, environment} from '../environments/environment';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    private url = environment.baseUrl + URLs.registerEndpoint;
    constructor(private http: HttpClient) { }

    register(email: String, username: String, password: String): Observable<any>{
        let obj =  this.http.post(this.url, {username:username,password:password,email:email})
        return obj;
    }
}
