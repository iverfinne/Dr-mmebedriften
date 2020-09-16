import { TestBed } from '@angular/core/testing';

import { OpenNettsideGuard } from './open-nettside.guard';

describe('OpenNettsideGuard', () => {
  let guard: OpenNettsideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OpenNettsideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
