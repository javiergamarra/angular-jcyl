import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CateringCompanyComponent} from './catering-company.component';

describe('CateringCompanyComponent', () => {
  let component: CateringCompanyComponent;
  let fixture: ComponentFixture<CateringCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CateringCompanyComponent]
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
