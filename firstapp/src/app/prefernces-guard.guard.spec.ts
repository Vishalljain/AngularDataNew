import { TestBed } from '@angular/core/testing';

import { PreferncesGuardGuard } from './prefernces-guard.guard';

describe('PreferncesGuardGuard', () => {
  let guard: PreferncesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferncesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
