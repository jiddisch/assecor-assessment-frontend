import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./features/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
