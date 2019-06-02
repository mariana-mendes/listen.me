import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll, IonSegment } from "@ionic/angular";
import { globalUser } from "src/app/global-user";
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

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  constructor(
    private authService: AuthService,
    private _userService: UserService
  ) {}

  async ngOnInit() {
    this._userService
      .getUserByEmail(firebase.auth().currentUser.email)
      .subscribe(result => {
        this.user = result[0]
        this.recommendations = result[0]._recommendations;
      });
    this.segment.value = "destaques";


  }

  onRateChange() {}

  segmentChanged() {}

  async logout() {
    try {
      this.authService.logout();
    } catch (error) {
      throw error;
    }
  }

  loadData(event) {
    console.log(this.recommendations[0].comment)
    setTimeout(() => {
      const newArray = Array(20);
      this.data.push(...newArray);
      console.log("Done");
      event.target.complete();
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
