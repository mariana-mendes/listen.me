import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const url = 'localhost:1111'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  addUser(user: User): Observable<User>  {
    return this.http.post<User>(url, user, httpOptions)
    .pipe()
  }
}




