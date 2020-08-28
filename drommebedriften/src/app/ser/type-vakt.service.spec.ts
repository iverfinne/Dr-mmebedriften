import { TestBed } from '@angular/core/testing';

import { TypeVaktService } from './type-vakt.service';

describe('TypeVaktService', () => {
  let service: TypeVaktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeVaktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
