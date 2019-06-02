import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import * as _ from "underscore";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})


export class ExplorarPage implements OnInit {

  searchTerm;
  allUsers: any[] = [];
  users: any[] = [];

  ngOnInit() { }

  constructor(private _userService: UserService) {
    this.searchTerm = '';

    this._userService.getUsers()
    .subscribe( allUsers => {
      console.log( allUsers );
      this.allUsers = allUsers;
    });
  }

  async search(text: any) {

    let q = text.target.value

    if (q == '') {
      return;
    }

    this._userService.getUserByName(q)
    .subscribe( users => {
      console.log( users );
      this.users = users;
    });

    // if (q && q.trim() != '') {
    //   this.users = _.values(this.allUsers);
    //   this.users = this.users.filter((user) => {
    //     console.log(user.email)
    //     return(user.username.toLowerCase().indexOf(q.toLowerCase()) > -1);
    //   })
    // } else {
    //   this.users = this.allUsers;
    // }

    
  }
};



