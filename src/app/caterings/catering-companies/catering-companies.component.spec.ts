import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringCompaniesComponent } from './catering-companies.component';

describe('CateringCompaniesComponent', () => {
  let component: CateringCompaniesComponent;
  let fixture: ComponentFixture<CateringCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringCompaniesComponent ]
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
