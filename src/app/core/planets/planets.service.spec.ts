import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planets.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
