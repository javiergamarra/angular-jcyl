import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';

@NgModule({
  declarations: [
    AppComponent,
    GrantsComponent,
    GrantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
