import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([]), MatCardModule, HttpClientTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('character$ should be observable', () => {
    expect(component.character$).toBeInstanceOf(Observable);
  });

  it('should call dialog open', () => {
    const matDialog = fixture.debugElement.injector.get(MatDialog);
    spyOn(matDialog, 'open');

    expect(matDialog.open).not.toHaveBeenCalled();
    component.openDialog('Planet');
    expect(matDialog.open).toHaveBeenCalled();
  });
});
