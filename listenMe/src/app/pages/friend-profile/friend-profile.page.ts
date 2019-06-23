import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import * as firebase from "firebase";

@Component({
  selector: "app-friend-profile",
  templateUrl: "./friend-profile.page.html",
  styleUrls: ["./friend-profile.page.scss"]
})
export class FriendProfilePage implements OnInit {

  public username: string
  public _followers: any[]
  public _following: any[]
  public _id: string
  public _recommendations: any[]
  public email: string
  public isFollowing: boolean
  loggedUser: any;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService) {
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
    this.isFollowing = !this.isFollowing;
  }

  ngOnInit() {
    console.log(this.isFollowing)

    this.segment.value = 'destaques';
    this._userService
      .getUserByEmail(firebase.auth().currentUser.email)
      .subscribe(result => {
        this.loggedUser = result[0];
      });

  }

  loadData(event) {

    setTimeout(() => {
      event.target.complete();
      if (this._recommendations.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  recommend() {

   }

  follow() {
    this.updateFollow()
    this._userService.follow(this.loggedUser._id, this._id)
   }

  unfollow() {
    this.updateFollow()
    this._userService.unfollow(this.loggedUser._id, this._id)
  }

  alreadyFollow() {

    return this.loggedUser._following.some(({username}) => username === this.username);
  }

}
