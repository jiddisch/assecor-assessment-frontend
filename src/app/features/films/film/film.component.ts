import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/films/film';
import { FilmsService } from 'src/app/core/films/films.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  film$: Observable<Film>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: FilmsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      const paramId = res.get('id');
      this.film$ = this.charactersService.film$(paramId);
    });
  }

  openDialog(type: string) {
    const dialogRef = this.dialog.open(DialogComponent, {data: {type}});
  }
}
