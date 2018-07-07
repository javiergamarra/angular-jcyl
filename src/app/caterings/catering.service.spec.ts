import {inject, TestBed} from '@angular/core/testing';

import {CateringService} from './catering.service';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

describe('CateringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CateringService, { provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    });
  });

  it('should be created', inject([CateringService], (service: CateringService) => {
    expect(service).toBeTruthy();
  }));
});
