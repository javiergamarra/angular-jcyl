import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GrantsService } from '../grants.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, tap, mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-grant',
  template: `
  <h1>{{grant?.id ? 'Actualizar' : 'Nueva'}} Solicitud</h1>

  <form class="ui form" [formGroup]="form">
    <div class="field">
      <label for="AlumnName">Nombre del Alumno</label>
      <input type="text" value="{{grant?.alumn}}" #alumn required name="AlumnName"
       [formControl]="form.controls['alumnName']">
    </div>
    <div class="field">
      <label for="GrantName">Solicitud</label>
      <input type="text" value="{{grant?.name}}" #name required name="GrantName"
      [formControl]="form.controls['grantName']">
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

    <button (click)="submit()" [disabled]="!form.valid">{{grant?.id ? 'Actualizar' : 'Guardar'}}</button>
    <button (click)="delete()">Eliminar</button>
  </form>
  `,
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  schools = ['Fernando de Rojas', 'Nuestra Señora de la Consolación'];
  listSchools = [];
  schoolSelected = '';
  form;

  @Input() grant;
  @Output() grantDeleted = new EventEmitter();

  constructor(
    private grantsService: GrantsService,
    private formsBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = formsBuilder.group({
      alumnName: '',
      grantName: '',
      date: ''
    });
    this.route.params
      .pipe(
        tap(x => console.log(x)),
        filter(x => x.id),
        mergeMap(x => this.grantsService.getGrant(x.id))
      )
      .subscribe(y => (this.grant = y));
  }

  ngOnInit() {}

  submit() {
    console.log(this.form);
    this.grant = this.grant || this.form.value;
    this.grant.name = this.form.value.grantName;
    this.grant.alumn = this.form.value.alumnName;
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
