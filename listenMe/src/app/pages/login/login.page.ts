import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

  public loginForm: FormGroup;
  public disabled = false;

  constructor(private router: Router, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });


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

  loginFacebook() {

  }

  loginGoogle() {
    this.auth.signInWithGoogle()
  }

  goRegister() {
    console.log('pelo amor de deus vai p register');
  }

  goRemember() {
    this.router.navigate(['lost-data']);
  }
  
  ngOnInit() {

  }
}


