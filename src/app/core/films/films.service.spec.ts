import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
