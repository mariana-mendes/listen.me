import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  constructor() { }

  ngOnInit() {
    this.segment.value = 'destaques';
  }

  onRateChange() {
  }

  segmentChanged() {

  }

  loadData(event) {
    setTimeout(() => {

      const newArray = Array(20);
      this.data.push( ...newArray);
      console.log('Done');
      event.target.complete();
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    },1000);
  }
}
