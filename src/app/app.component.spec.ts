import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {StoreModule} from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [RouterModule.forRoot([]), SharedModule, StoreModule.forRoot({})]
    }).compileComponents();
  }));
  it('should createGrant the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('HomeGrantsCenters');
  }));
});
