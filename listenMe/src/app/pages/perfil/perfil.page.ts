import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit {
  recommendations: any[];
  data: any[] = Array(20);
  user: Observable<any>;
  type: '';
  API_KEY: string;
  videos: [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private _userService: UserService,
    public http: Http,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //this.data tem a informação q passou na busca em explorar
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
    this.API_KEY = 'AIzaSyDT-bo5k2sflzuQ206OE1882mdeukTdTXs';
  }

  ngOnInit() {
    this.segment.value = 'destaques';
    this._userService.getUserByEmail(firebase.auth().currentUser.email).subscribe(result => {
      console.log(result);
      this.user = result[0];
      console.log(this.user);
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
      console.log('Done');
      event.target.complete();
      if (this.recommendations.length === 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
