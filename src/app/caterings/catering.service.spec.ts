import { TestBed, inject } from '@angular/core/testing';

import { CateringService } from './catering.service';

describe('CateringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateringService]
    });
  });

  it('should be created', inject([CateringService], (service: CateringService) => {
    expect(service).toBeTruthy();
  }));
});
