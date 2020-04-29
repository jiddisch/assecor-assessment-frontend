import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class CharactersModule { }
