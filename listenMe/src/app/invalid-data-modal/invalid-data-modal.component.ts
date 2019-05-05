import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-invalid-data-modal',
  templateUrl: './invalid-data-modal.component.html',
  styleUrls: ['./invalid-data-modal.component.scss'],
})
export class InvalidDataModalComponent implements OnInit {

  myParameter: boolean;
  myOtherParameter: Date;

  constructor(private modalController: ModalController,
    private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.myParameter = this.navParams.get('aParameter');
    this.myOtherParameter = this.navParams.get('otherParameter');
  }

  async myDismiss() {
    const result: Date = new Date();

    await this.modalController.dismiss(result);
  }
  ngOnInit() { }

}
