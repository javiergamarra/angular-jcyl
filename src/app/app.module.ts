import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './core/routes';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './shared/user-store';
import {BankDataComponent} from './grants/bank-data/bank-data.component';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BankDataComponent, UserComponent],
  imports: [BrowserModule, SharedModule, routing, BrowserAnimationsModule, StoreModule.forRoot({ user: userReducer })],
  providers: [{
    provide: 'serverUrl', useValue: 'https://data-grants.wedeploy.io/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
