import { TestBed, async, inject } from '@angular/core/testing';

import { MyGuardGuard } from './my-guard.guard';

describe('MyGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGuardGuard]
    });
  });

  it('should ...', inject([MyGuardGuard], (guard: MyGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
