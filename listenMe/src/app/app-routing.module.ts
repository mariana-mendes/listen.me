import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: './tabs/tabs.router.module#TabsPageRoutingModule'
  },
  { path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { path: 'connections', loadChildren: './pages/perfil/connections/connections.module#ConnectionsPageModule' },
  { path: 'followers', loadChildren: './pages/perfil/followers/followers.module#FollowersPageModule' },
  { path: 'following', loadChildren: './pages/perfil/following/following.module#FollowingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
