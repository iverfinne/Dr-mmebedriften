import { TestBed } from '@angular/core/testing';

import { LukkNedSideService } from './lukk-ned-side.service';

describe('LukkNedSideService', () => {
  let service: LukkNedSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LukkNedSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
