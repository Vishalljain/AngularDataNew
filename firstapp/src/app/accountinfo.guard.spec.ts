import { TestBed } from '@angular/core/testing';

import { AccountinfoGuard } from './accountinfo.guard';

describe('AccountinfoGuard', () => {
  let guard: AccountinfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountinfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
