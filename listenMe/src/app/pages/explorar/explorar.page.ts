import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})


export class ExplorarPage implements OnInit {
  
  ngOnInit() {}
  
  constructor( private _userService: UserService, ) { }

  async search(event: any) {

    console.log(event)
    try {
      await this._userService.getUserByName(event).subscribe(user => {
        console.log(user)
      });
    } catch (error) {
      
    }

  }

  
};



