import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URLs} from '../environments/environment';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';


//import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    private url = URLs.registerService;
    constructor(private http: HttpClient) { }

    //getAll() {
    //    return this.http.get<User[]>(`${config.apiUrl}/users`);
    //}

    register(username: String, password: String, email: String): Observable<any>{
        let obj =  this.http.post(this.url, {username:username,password:password,email:email})
        //console.log('username',username,'password',password,'email',email);
        //console.log("user.service register obj", JSON.stringify(obj));
        //console.log("user.service register pipe", obj.pipe(first()));
        //console.log("user.service register pipe subscribe", obj.pipe(first()).subscribe());
        return obj;
    }

    //delete(id: number) {
    //    return this.http.delete(`${config.apiUrl}/users/${id}`);
    //}
}