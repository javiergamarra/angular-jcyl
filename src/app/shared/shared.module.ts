import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {MunicipalityComponent} from '../municipality/municipality.component';
import {ProvinceComponent} from '../province/province.component';
import {CityComponent} from '../city/city.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, MatMenuModule, MatToolbarModule,
    MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
  ],
  declarations: [ProvinceComponent, MunicipalityComponent, CityComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, MatMenuModule, MatToolbarModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    ProvinceComponent, MunicipalityComponent, CityComponent
  ]
})
export class SharedModule {
}
