import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "src/app/service/user.service";
import { Router, NavigationExtras,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  allUsers: any[];
  _followers: any[];

  @Input() username:string= "default";

  constructor(private _userService: UserService,
    private router: Router,private route: ActivatedRoute,
   ) {
      
        this.route.queryParams.subscribe(params => {
          console.log(this.router.getCurrentNavigation().extras);
          if (this.router.getCurrentNavigation().extras) {
            this.username = this.router.getCurrentNavigation().extras.state.user['username'];
            console.log("entrou muito aqui");
            this._followers = this.router.getCurrentNavigation().extras.state.user['_followers'];
           
           
          }
        
  })
};
  ngOnInit() {
    console.log("Nome");
    console.log(this.username);
    
    const status = '';
  }
}
