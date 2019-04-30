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
  { path: 'lostData', 
    loadChildren: './lost-data/lost-data.module#LostDataPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
