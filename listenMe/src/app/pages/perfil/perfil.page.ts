import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {

  data: any[] = Array(20);

  private user;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  
  
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //this.data tem a informação q passou na busca em explorar
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.segment.value = 'destaques';
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
