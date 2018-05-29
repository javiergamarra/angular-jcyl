import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGrantModule } from './new-grant/new-grant.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, NewGrantModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
