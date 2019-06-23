import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './tabs/tabs.router.module#TabsPageRoutingModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  { path: 'lost-data', 
    loadChildren: './pages/lost-data/lost-data.module#LostDataPageModule' 
  },
  { path: 'register', 
  loadChildren: './pages/register/register.module#RegisterPageModule' 
  },
  { path: 'friend-profile', loadChildren: './pages/friend-profile/friend-profile.module#FriendProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
