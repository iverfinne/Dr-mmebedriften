import { TestBed } from '@angular/core/testing';

import { GlobaleLyttararService } from './globale-lyttarar.service';

describe('GlobaleLyttararService', () => {
  let service: GlobaleLyttararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaleLyttararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
