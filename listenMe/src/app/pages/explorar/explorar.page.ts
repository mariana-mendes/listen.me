import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from "underscore";
import { UserService } from "src/app/service/user.service";
import { PerfilPage } from '../perfil/perfil.page';
import {NavController, App} from "ionic-angular/index";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})


export class ExplorarPage implements OnInit {
  @ViewChild('nav') navCtrl: NavController;
  
  searchTerm;
  allUsers: any[] = [];
  users: any[] = [];

  

  ngOnInit() { }

  constructor(private _userService: UserService,
              private router: Router,) {
    
    this.searchTerm = '';

    this._userService.getUsers()
    .subscribe( allUsers => {
      console.log( allUsers );
      this.allUsers = allUsers;
    });
  }

  async search(text: any) {

    let userName = text.target.value

    if (userName == '') {
      return;
    }

    this._userService.getUserByName(userName)
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

  goToProfile() {
    let userInformation: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.users)
      }
    };

    console.log(userInformation.queryParams.special)
    this.router.navigate(['home/tabs/perfil'], userInformation);
  }
};



