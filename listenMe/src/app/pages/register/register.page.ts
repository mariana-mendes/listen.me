import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = {
    username: '',
    email: '',
    password: '',
    user: []
  }
  emailMatchValidator(g: FormGroup): any {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(g.get('email')).toLowerCase());
  }

  formRegister = new FormGroup({
    username: new FormControl(this.user.username, Validators.required ),
    email: new FormControl(this.user.email),
    password: new FormControl(this.user.password, Validators.minLength(6))
  }, this.emailMatchValidator);

  constructor(private _userService: UserService, private router: Router) { }

  goLogin(){
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }
  
  register = () => {
    this._userService.addUser(this.formRegister.value).subscribe(user => console.log(user));
  }

}
