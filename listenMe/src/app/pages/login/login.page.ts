import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  
  constructor(
    private auth: AuthService
    
  ) 
  }
  login(email,password) {
   

    if (!email) {
      return;
    }

    let credentials = {
      email: email,
      password: password
    };
    this.auth.signInWithEmail(credentials)
     
  }

  loginWithGoogle() {
  this.auth.signInWithGoogle()
    
  }

}

