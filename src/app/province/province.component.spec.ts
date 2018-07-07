import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProvinceComponent} from './province.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('ProvinceComponent', () => {
  let component: ProvinceComponent;
  let fixture: ComponentFixture<ProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProvinceComponent],
      imports: [CommonModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
