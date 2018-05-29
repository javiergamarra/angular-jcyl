import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GrantsService } from '../grants.service';

@Component({
  selector: 'app-grant',
  template: `
  <h1>{{grant?.id ? 'Actualizar' : 'Nueva'}} Solicitud</h1>

  <form class="ui form" #f="ngForm" (ngSubmit)="submit(f)">
    <div class="field">
      <label for="AlumnName">Nombre del Alumno</label>
      <input type="text" id="AlumnName" value="{{grant?.alumn}}" #alumn ngModel required name="AlumnName">
    </div>
    <div class="field">
      <label for="GrantName">Solicitud</label>
      <input type="text" id="GrantName" value="{{grant?.name}}" #name ngModel required name="GrantName">
    </div>

    <div class="field">
      <label for="School">Centro</label>
      <input type="text" id="School" (keyup)="searchSchools(school.value)" [value]="schoolSelected" #school>
    </div>
    <div *ngIf="listSchools.length">
      <ul>
        <li *ngFor="let school of listSchools" (click)="selectSchool(school)">
          {{school}}
        </li>
      </ul>
    </div>

    <button [disabled]="!f.valid">{{grant?.id ? 'Actualizar' : 'Guardar'}}</button>
    <button (click)="delete()">Eliminar</button>
  </form>
  `,
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  schools = ['Fernando de Rojas', 'Nuestra Señora de la Consolación'];
  listSchools = [];
  schoolSelected = '';

  @Input() grant;
  @Output() grantDeleted = new EventEmitter();

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {}

  submit(f) {
    console.log(f);
    this.grant = this.grant || f.value;
    this.grant.name = f.value.GrantName;
    this.grant.alumn = f.value.AlumnName;
    this.grantsService.create(this.grant);
  }

  delete() {
    this.grantDeleted.emit(this.grant);
    return false;
  }

  searchSchools(school) {
    console.log(school);
    this.listSchools = this.schools.filter(x => x.includes(school));
  }

  selectSchool(school) {
    this.schoolSelected = school;
  }
}
