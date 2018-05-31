import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrantsComponent} from './grants.component';
import {RouterModule} from '@angular/router';
import {routing} from '../routes';
import {HomeComponent} from '../home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

describe('GrantsComponent', () => {
  let component: GrantsComponent;
  let fixture: ComponentFixture<GrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantsComponent, HomeComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [RouterModule.forRoot([]), HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
