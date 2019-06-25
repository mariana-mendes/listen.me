import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicRatingModule } from 'ionic4-rating';

import { IonicModule } from '@ionic/angular';

import { FriendProfilePage } from './friend-profile.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FriendProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    IonicRatingModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [FriendProfilePage]
})
export class FriendProfilePageModule {}
