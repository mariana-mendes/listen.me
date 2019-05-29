import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll, IonSegment } from "@ionic/angular";
import { globalUser } from "src/app/global-user";
import { AuthService } from "src/app/service/auth.service";
import { UserService } from "src/app/service/user.service";
import * as firebase from 'firebase';

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  constructor(private authService: AuthService,
    private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUserByEmail(firebase.auth().currentUser.email).subscribe(user => {
      console.log(user[0])
    });
    this.segment.value = "destaques";
  }

  onRateChange() {}

  segmentChanged() {}

  async logout() {
    try {
      this.authService.logout();
    } catch (error) {
      throw error
    }
  }

  loadData(event) {
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
