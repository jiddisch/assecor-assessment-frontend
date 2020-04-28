import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [FilmsComponent, FilmComponent],
  imports: [
    CommonModule,
    SharedModule,
    FilmsRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class FilmsModule { }
