import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CentersComponent} from './centers.component';
import {SharedModule} from '../../shared/shared.module';

describe('CentersComponent', () => {
  let component: CentersComponent;
  let fixture: ComponentFixture<CentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CentersComponent],
      imports: [SharedModule],
      providers: [{
        provide: 'serverUrl', useValue: 'http://localhost:4000'
      }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
