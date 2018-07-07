import {inject, TestBed} from '@angular/core/testing';

import {CenterService} from './center.service';
import {HttpClientModule} from '@angular/common/http';
import {CateringService} from '../caterings/catering.service';
import {APP_BASE_HREF} from '@angular/common';

describe('CenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CenterService, { provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    });
  });

  it('should be created', inject([CenterService], (service: CenterService) => {
    expect(service).toBeTruthy();
  }));
});
