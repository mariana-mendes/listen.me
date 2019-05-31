import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})


export class ExplorarPage implements OnInit {
  
  searchTerm;

  ngOnInit() {}
  
  constructor( private _userService: UserService) {
    this.searchTerm = '';
  }

  async search(text: any) {
    
    let q = text.target.value

    if (q == '') {
      return;
    }
    
    this._userService.getUserByName(q).subscribe((data) => {
        console.log('resultados encontrados:', data)
      });
  }
};



