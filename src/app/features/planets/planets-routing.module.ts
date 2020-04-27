import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';


const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: ':id',
    component: PlanetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
