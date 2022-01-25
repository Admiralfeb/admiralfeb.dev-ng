import { TestBed } from '@angular/core/testing';

import { DiningSelectorService } from './dining-selector.service';

describe('DiningSelectorService', () => {
  let service: DiningSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiningSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
