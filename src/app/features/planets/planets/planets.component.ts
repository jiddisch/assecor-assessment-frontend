import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/core/planets/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets$ = this.charactersService.planets$();

  constructor(private charactersService: PlanetsService) { }

  ngOnInit(): void {
  }
}
