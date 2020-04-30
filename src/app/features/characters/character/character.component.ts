import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/characters/characters.service';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/characters/character';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character$: Observable<Character>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      const paramId = res.get('id');
      this.character$ = this.charactersService.character$(paramId);
    });
  }

  openDialog(type: string) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { type } });
  }
}
