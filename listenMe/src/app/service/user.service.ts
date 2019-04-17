import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const url = 'localhost:3000/user'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { 

  }
  addUser(user: User): Observable<User[]> {
    const request = this.http.get<User[]>(url);
    console.log(request);
    return request; 
  }


}







