import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsModule } from './films.module';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
  },
  {
    path: ':id',
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
