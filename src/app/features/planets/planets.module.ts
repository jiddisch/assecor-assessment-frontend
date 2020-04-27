import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
