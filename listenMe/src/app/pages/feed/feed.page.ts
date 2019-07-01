import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  
  user: Observable<any>;
  recommendations: any[];
  following: any[];
  viewRecommendations: any[];
  _id: any;
  API_KEY: string;
  videos: [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private _userService: UserService,
    public sanitizer: DomSanitizer,
    public http: Http,
  ) {
    this.API_KEY = 'AIzaSyDT-bo5k2sflzuQ206OE1882mdeukTdTXs';
   }

  ngOnInit() {

    this._userService.getUserByEmail(firebase.auth().currentUser.email).subscribe(result => {
      this.user = result[0];
      this._id = result[0]._id;
      this.following = result[0]._following;
      const temp = [];
      for (let index = 0; index < this.following.length; index++) {
        this._userService.getUserByName(this.following[index].username).subscribe(friends => {
          const item = friends[0]._recommendations[0];
          temp.push(item);
          this.recommendations = temp;
          this.renderRecommendations();
          console.log("rec", this.recommendations)
          console.log("view", this.viewRecommendations)
        });
      }
    });
  }

  renderRecommendations() {
    this.viewRecommendations = this.recommendations.map(item => {
      if (item.idSource === item.idTarget) {
        item.type = 'destaques';
      } else if (item.idSource === this._id && item.idSource !== item.idTarget) {
        item.type = 'indiquei';
      } else {
        item.type = 'para ouvir';
      }
      item.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `${item.embedUrl}`
      );
      return item;
    });
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


}
