import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll, IonSegment } from "@ionic/angular";
import { AuthService } from "src/app/service/auth.service";
import { UserService } from "src/app/service/user.service";
import * as firebase from "firebase";
import {Observable} from "rxjs";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  recommendations: any[];

  user: Observable<any>;
  type: '';

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  constructor(
    private authService: AuthService,
    private _userService: UserService
  ) {}

  async ngOnInit() {
    this.segment.value = 'destaques';
    this._userService
      .getUserByEmail(firebase.auth().currentUser.email)
      .subscribe(result => {
        this.user = result[0];
        this.recommendations = result[0]._recommendations;
      });

  }

  onRateChange() {}

  segmentChanged(event) {
    const segmentValue = event.detail.value;
    this.type = segmentValue;
  }

  async logout() {
    try {
      this.authService.logout();
    } catch (error) {
      throw error;
    }
  }

  loadData(event) {
    
    setTimeout(() => {
      console.log("Done");
      event.target.complete();
      if (this.recommendations.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  follow() {
   this._userService.follow(this.user._id, this.user._id)
  }

  unfollow() {
    this._userService.unfollow(this.user._id, this.user._id)
   }


}
