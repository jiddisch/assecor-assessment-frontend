import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters$ = this.charactersService.characters$();

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

}
