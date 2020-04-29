import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PlanetsComponent, PlanetComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlanetsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class PlanetsModule { }
