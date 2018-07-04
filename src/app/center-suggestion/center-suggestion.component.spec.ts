import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSuggestionComponent } from './center-suggestion.component';

describe('CenterSuggestionComponent', () => {
  let component: CenterSuggestionComponent;
  let fixture: ComponentFixture<CenterSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterSuggestionComponent ]
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
