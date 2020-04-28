import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/core/planets/planet';
import { PlanetsService } from 'src/app/core/planets/planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet$: Observable<Planet>;
  constructor(private activatedRoute: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const paramId = res.get('id');
      this.planet$ = this.planetsService.planet$(paramId);
    });
  }

}
