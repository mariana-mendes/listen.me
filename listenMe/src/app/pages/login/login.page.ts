import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
    this.router.navigate(['register']);
  }

  goRemember() {
    this.router.navigate(['lostData']);
  }
  
  ngOnInit() {

  }

}