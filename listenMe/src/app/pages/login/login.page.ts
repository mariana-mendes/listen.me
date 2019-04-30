import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public disabled = false;

  constructor(private router: Router, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });


  }

  login() {
    console.log(this.loginForm.value);
    this.disabled = !this.disabled;
  }

  loginFacebook() {

  }

  loginGoogle() {

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