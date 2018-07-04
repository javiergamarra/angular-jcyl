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
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, MatMenuModule, MatToolbarModule,
    MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    CarouselModule.forRoot()
  ],
  declarations: [ProvinceComponent, MunicipalityComponent, CityComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, MatMenuModule, MatToolbarModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    ProvinceComponent, MunicipalityComponent, CityComponent, CarouselModule
  ]
})
export class SharedModule {
}
