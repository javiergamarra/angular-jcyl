import { TestBed, inject } from '@angular/core/testing';

import { GrantsService } from './grants.service';

describe('GrantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrantsService]
    });
  });

  it('should be created', inject([GrantsService], (service: GrantsService) => {
    expect(service).toBeTruthy();
  }));
});
