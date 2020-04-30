import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmComponent } from './film.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([]), MatCardModule, HttpClientTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('film$ should be observable', () => {
    expect(component.film$).toBeInstanceOf(Observable);
  });

  it('should call dialog open', () => {
    const matDialog = fixture.debugElement.injector.get(MatDialog);
    spyOn(matDialog, 'open');

    expect(matDialog.open).not.toHaveBeenCalled();
    component.openDialog('Planet');
    expect(matDialog.open).toHaveBeenCalled();
  });
});
