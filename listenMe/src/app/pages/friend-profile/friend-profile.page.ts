import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Searchbar } from 'ionic-angular';
import { ActionSheetController, IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.page.html',
  styleUrls: ['./friend-profile.page.scss']
})
export class FriendProfilePage implements OnInit {
  public username: string;
  public _followers: any[];
  public _following: any[];
  public _id: string;
  public _recommendations: any[];
  public email: string;
  public isFollowing: boolean;
  loggedUser: any;
  viewRecommendations: any[];
  type: '';

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  @ViewChild('searchbar', { read: ElementRef })
  searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private _userService: UserService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.user['username'];
        this._followers = this.router.getCurrentNavigation().extras.state.user['_followers'];
        this._following = this.router.getCurrentNavigation().extras.state.user['_following'];
        this._id = this.router.getCurrentNavigation().extras.state.user['_id'];
        this._recommendations = this.router.getCurrentNavigation().extras.state.user['_recommendations'];
        this.email = this.router.getCurrentNavigation().extras.state.user['email'];
        this.renderRecommendations();
      }
    });
  }

  updateFollow() {
    this.isFollowing = !this.isFollowing;
  }

  ngOnInit() {
    this.segment.value = 'destaques';
    this._userService.getUserByEmail(firebase.auth().currentUser.email).subscribe(result => {
      this.loggedUser = result[0];
      this.alreadyFollow();
    });
  }

  recommend() {}

  follow() {
    this.updateFollow();
    this._userService.follow(this.loggedUser._id, this._id);
  }

  unfollow() {
    this.updateFollow();
    this._userService.unfollow(this.loggedUser._id, this._id);
  }

  alreadyFollow() {
    if (this.loggedUser) {
      this.isFollowing = this.loggedUser._following.some(({ username }) => username === this.username);
    }
  }

  toggleSearch() {
   this.search = !this.search
  }

  searchAction(texto: any) {
    let val = texto.target.value;
    //implement search
  }

  segmentChanged(event) {
    const segmentValue = event.detail.value;
    this.type = segmentValue;
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.viewRecommendations.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  renderRecommendations() {
    this.viewRecommendations = this._recommendations.map(item => {
      if (item.idSource === item.idTarget) {
        item.type = 'destaques';
      } else if (item.idSource === this._id && item.idSource !== item.idTarget) {
        item.type = 'indiquei';
      } else {
        item.type = 'para ouvir';
      }
      return item;
    });
  }
}
