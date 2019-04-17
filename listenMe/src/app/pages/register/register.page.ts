import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = {
      username: '',
      email: '',
      password: ''
  }

  constructor(private _userService: UserService) { }

  validate(): any {
   if(!this.user){
     throw Error("User is not valid!");
   }
  }

  ngOnInit() {
  }

  register = () => {
    console.log(this.user)
    this.validate();
    this._userService.addUser(this.user).subscribe();
  }




}
