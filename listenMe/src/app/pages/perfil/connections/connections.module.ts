import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConnectionsPage } from './connections.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsPage,
    children: [
      {
        path: 'followers',
        children: [
          {
            path: '',
            loadChildren: '../followers/followers.module#FollowersPageModule'
          }
        ]
      },
      {
        path: 'following',
        children: [
          {
            path: '',
            loadChildren: '../following/following.module#FollowingPageModule'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnectionsPage]
})
export class ConnectionsPageModule {}
