import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Searchbar} from 'ionic-angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: "app-friend-profile",
  templateUrl: "./friend-profile.page.html",
  styleUrls: ["./friend-profile.page.scss"]
})
export class FriendProfilePage implements OnInit {

  public username: string
  public _followers: []
  public _following: []
  public _id: string
  public _recommendations: []
  public email: string
  public isFollowing: boolean

  @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean  = false;

  constructor(private route: ActivatedRoute, private router: Router, public actionSheetController: ActionSheetController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.user["username"]
        this._followers = this.router.getCurrentNavigation().extras.state.user["_followers"]
        this._following = this.router.getCurrentNavigation().extras.state.user["_following"]
        this._id = this.router.getCurrentNavigation().extras.state.user["_id"]
        this._recommendations = this.router.getCurrentNavigation().extras.state.user["_recommendations"]
        this.email = this.router.getCurrentNavigation().extras.state.user["email"]
      }
    });
  }


  updateFollow(){
    this.isFollowing = !this.isFollowing

  }
  
  ngOnInit() {}


  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
      this.searchbarElement.setFocus();
    }
  }

  searchAction(texto: any) {
    let val = texto.target.value;
    //implement search
  }

}
