import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CateringCompaniesComponent} from './catering-companies.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('CateringCompaniesComponent', () => {
  let component: CateringCompaniesComponent;
  let fixture: ComponentFixture<CateringCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CateringCompaniesComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
