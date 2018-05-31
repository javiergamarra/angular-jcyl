import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './routes';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule, AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SharedModule, routing, BrowserAnimationsModule, AlertModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
