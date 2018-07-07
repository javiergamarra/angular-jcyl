import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CenterSuggestionComponent} from './center-suggestion.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('CenterSuggestionComponent', () => {
  let component: CenterSuggestionComponent;
  let fixture: ComponentFixture<CenterSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterSuggestionComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: 'serverUrl', useValue: 'http://localhost:4000' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
