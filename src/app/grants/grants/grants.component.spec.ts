import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GrantsComponent} from './grants.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from '../../home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {GrantsService} from '../grants.service';
import {asyncData} from '../grants.service.spec';

// class MockGrantsService {
//   http;
//
//   getGrants() {
//     return ['grant 1'];
//   }
//
// }

describe('GrantsComponent', () => {
  let component: GrantsComponent;
  let fixture: ComponentFixture<GrantsComponent>;

  const grantsService = jasmine.createSpyObj('GrantsService', ['getGrants']);
  grantsService.getGrants.and.returnValue(asyncData(['grant 1']));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantsComponent, HomeComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: GrantsService, useValue: grantsService }],
      imports: [RouterModule.forRoot([]), SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createGrant', () => {
    expect(component).toBeTruthy();
  });

  it('searchGrants', () => {

    component.grants$.subscribe(
      grants => expect(grants).toEqual(['grant 1'], 'expected grants'),
      fail
    );
  });


});
