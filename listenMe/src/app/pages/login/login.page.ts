import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    username: "";
    password: "";
  
  constructor() { }

  login() {
    console.log("username:" + this.username);
    console.log("password:" + this.password);
  }


  ngOnInit() {
  }

}
