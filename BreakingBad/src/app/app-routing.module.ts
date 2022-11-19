import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import('./tabs/characters/characters.module').then(m => m.CharactersPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./tabs/episodes/episodes.module').then(m => m.EpisodesPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./tabs/quotes/quotes.module').then(m => m.QuotesPageModule)
  },
  {
    path: 'death-count',
    loadChildren: () => import('./tabs/deaths/deaths.module').then(m => m.DeathCountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
