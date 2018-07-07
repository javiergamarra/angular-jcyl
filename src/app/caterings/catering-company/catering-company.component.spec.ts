import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CateringCompanyComponent} from './catering-company.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('CateringCompanyComponent', () => {
  let component: CateringCompanyComponent;
  let fixture: ComponentFixture<CateringCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CateringCompanyComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
