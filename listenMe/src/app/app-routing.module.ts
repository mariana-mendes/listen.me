import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'feed', loadChildren: './pages/feed/feed.module#FeedPageModule' },
  { path: 'explorar', loadChildren: './pages/explorar/explorar.module#ExplorarPageModule' },
  { path: 'estatisticas', loadChildren: './pages/estatisticas/estatisticas.module#EstatisticasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
