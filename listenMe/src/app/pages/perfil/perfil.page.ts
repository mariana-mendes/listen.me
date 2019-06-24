import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "src/app/service/auth.service";
import { UserService } from "src/app/service/user.service";
import * as firebase from "firebase";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {

  recommendations: any[];
  following: any[];
  data: any[] = Array(20);
  user: any;
  type: '';

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private authService: AuthService, 
              private _userService: UserService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.segment.value = 'destaques';
    this._userService
      .getUserByEmail(firebase.auth().currentUser.email)
      .subscribe(result => {
        this.user = result[0];
        this.recommendations = result[0]._recommendations;
        this.following = result[0]._following;
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
      event.target.complete();
      if (this.recommendations.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  recommend() {

   }



}
