import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CenterComponent} from './center.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('CenterComponent', () => {
  let component: CenterComponent;
  let fixture: ComponentFixture<CenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
