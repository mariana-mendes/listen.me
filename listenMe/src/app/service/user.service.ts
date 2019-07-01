import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { Observable, Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Recommedation, RecommendationInput } from '../types/recommedation';


const url = 'https://listen-me.herokuapp.com/user/'
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

  constructor(private http: HttpClient) {

  }

  getUserByEmail(userEmail: string): any {
    return this.http.get(`${url}email/${userEmail}`)
  }

  getUserByName(username: string) {
    return this.http.get<any[]>(`${url}/${username}`)
  }

  getUsers() {
    return this.http.get<any[]>(`${url}`)
  }

  addRecommendation(recommendation: RecommendationInput){
    const recommendUrl = `${url}${recommendation.idSource}/recommendation`
    
    return this.http.put<Recommedation>(recommendUrl, recommendation, httpOptions).pipe(
      map(recommendation => recommendation)
    )
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(url, user, httpOptions).pipe(
      map(user => user)
    );
  }

  follow(userId: string, fuserId: string) {

    return new Promise(resolve => {
      this.http.put(`${url}${userId}/follow/${fuserId}`, {})
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            alert(error.text());
            console.log(error.text());
          });
     });
  }

  unfollow(userId: string, fuserId: string) {

    return new Promise(resolve => {
      this.http.put(`${url}${userId}/unfollow/${fuserId}`, {})
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            alert(error.text());
            console.log(error.text());
          });
     });
  }
}







