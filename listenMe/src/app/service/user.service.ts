import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable, Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const url = 'http://localhost:8888/user/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type, user'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getUserByEmail(userEmail: string): any {
    return this.http.get(`${url}email/${userEmail}`)
  }
  constructor(private http: HttpClient) {

  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(url, user, httpOptions).pipe(
      map(user => user)
    );
  }
}







