import { TestBed } from '@angular/core/testing';

import { CService } from './Place.service';

describe('CService', () => {
  let service: CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
