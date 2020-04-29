import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/films/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films$ = this.filmsService.films$();

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
  }

}
