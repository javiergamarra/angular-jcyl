import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'comedores-province',
  template: `
    <select name="province" [(ngModel)]="province" [ngModelOptions]="{standalone: true}" (change)="changed()">
      <option *ngFor="let province of provinces">{{province}}</option>
    </select>
  `
})
export class ProvinceComponent implements OnInit {

  @Output()
  selected = new EventEmitter();
  provinces = ['', 'Valladolid', 'Salamanca'];
  province;

  constructor() {
  }

  ngOnInit() {
  }

  changed() {
    this.selected.emit(this.province);
  }

}
