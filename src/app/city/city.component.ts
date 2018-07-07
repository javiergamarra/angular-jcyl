import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'comedores-city',
  template: `
    <select name="city" [(ngModel)]="city" [ngModelOptions]="{standalone: true}" (change)="changed()">
      <option *ngFor="let city of filteredCities">{{city.name}}</option>
    </select>
  `
})
export class CityComponent implements OnInit {

  @Input()
  set municipality(province: string) {
    this.filterCities(province);
  }

  @Output()
  selected = new EventEmitter();

  filteredCities;
  cities = [
    { municipality: '', name: '' },
    { municipality: 'Valladolid', name: 'Valladolid' },
    { municipality: 'Valladolid', name: 'La Cistérniga' },
    { municipality: 'Salamanca', name: 'Salamanca' },
    { municipality: 'Salamanca', name: 'La Alberca' }
  ];
  city;

  constructor() {
  }

  ngOnInit() {
  }

  private filterCities(municipality) {
    this.filteredCities = this.cities
      .filter(city => !city.municipality || municipality &&
        city.municipality.toLowerCase().indexOf(municipality.toLowerCase()) !== -1);
  }

  changed() {
    if (this.city) {
      this.selected.emit(this.city);
    }
  }

}
