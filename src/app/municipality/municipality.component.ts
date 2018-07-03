import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'comedores-municipality',
  template: `
    <select name="municipality" [(ngModel)]="municipality" [ngModelOptions]="{standalone: true}" (change)="changed()">
      <option *ngFor="let municipality of filteredMunicipalities">{{municipality.name}}</option>
    </select>
  `
})
export class MunicipalityComponent implements OnInit {

  @Input()
  set province(province: string) {
    this.filterMunicipalities(province);
  }

  @Output()
  selected = new EventEmitter();

  filteredMunicipalities;
  municipalities = [
    { province: '', name: '' },
    { province: 'Valladolid', name: 'Valladolid' },
    { province: 'Salamanca', name: 'Salamanca' }
  ];
  municipality;

  constructor() {
  }

  ngOnInit() {
  }

  private filterMunicipalities(province) {
    this.filteredMunicipalities = this.municipalities
      .filter(mun => !mun.province || province && mun.province.toLowerCase().indexOf(province.toLowerCase()) !== -1);
  }

  changed() {
    if (this.municipality) {
      this.selected.emit(this.municipality);
    }
  }

}
