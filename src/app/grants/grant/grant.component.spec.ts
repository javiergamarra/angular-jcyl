import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrantComponent} from './grant.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {PadreComponent} from '../../padre/padre.component';

describe('GrantComponent', () => {
  let component: GrantComponent;
  let fixture: ComponentFixture<GrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantComponent, PadreComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [RouterModule.forRoot([]), SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantComponent);
    component = fixture.componentInstance;
  });

  it('should createGrant', () => {
    expect(component).toBeTruthy();
  });

  it('#schoolSelected', () => {
    expect(component.schoolSelected).toBe('', 'null');
    component.selectSchool('Fernando');
    expect(component.schoolSelected).toContain('Fernando', 'on after click');
  });

  it('#searchSchools', () => {
    expect(component.listSchools).toEqual([], 'null');
    component.searchSchools('Fernando');
    expect(component.listSchools).toContain('Fernando de Rojas', 'on after click');
  });

});
