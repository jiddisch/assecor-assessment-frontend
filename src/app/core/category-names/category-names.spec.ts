import { TestBed } from '@angular/core/testing';
import { CategoryNamesService } from './category-names';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryNamesService', () => {
  let service: CategoryNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
