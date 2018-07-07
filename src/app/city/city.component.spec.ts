import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CityComponent} from './city.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityComponent],
      imports: [CommonModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
