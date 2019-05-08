import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public disabled = false;
  public userLogin: User = {};
  public array: [];

  constructor(private router: Router, 
              public formBuilder: FormBuilder,
              private authService: AuthService,
              private _userService: UserService) {
          
  }

  
  
  async login() {

  

    console.log(this._userService.getUser(this.userLogin))
    
    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      console.log(error.message)
    }

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


