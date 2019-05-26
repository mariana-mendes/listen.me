import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  
  register(user: User){
    console.log(user.email)
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  getAuth() {
    return this.afa.auth;
  }
  
}
