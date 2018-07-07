import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrantComponent} from './grant.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {FatherComponent} from '../../father/father.component';

describe('GrantComponent', () => {
  let component: GrantComponent;
  let fixture: ComponentFixture<GrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantComponent, FatherComponent],
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

  it('#centerSelected', () => {
    expect(component.centerSelected).toBe('', 'null');
    component.selectSchool('Fernando');
    expect(component.centerSelected).toContain('Fernando', 'on after click');
  });

});
