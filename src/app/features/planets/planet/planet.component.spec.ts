import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponent } from './planet.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([]), MatCardModule, HttpClientTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('planet$ should be observable', () => {
    expect(component.planet$).toBeInstanceOf(Observable);
  });

  it('should call dialog open', () => {
    const matDialog = fixture.debugElement.injector.get(MatDialog);
    spyOn(matDialog, 'open');

    expect(matDialog.open).not.toHaveBeenCalled();
    component.openDialog('Planet');
    expect(matDialog.open).toHaveBeenCalled();
  });
});
