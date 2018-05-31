import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GrantsService} from '../grants.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {filter, mergeMap, tap} from 'rxjs/operators';

const allTypes = [
  'Habitual',
  'Habitual discontinuo',
  'Esporadico',
  'Transportado'
];

@Component({
  selector: 'app-grant',
  template: `
    <h1>{{grant?.id ? 'Actualizar' : 'Nueva'}} Solicitud</h1>

    <form class="ui form" [formGroup]="form">

      <label for="AlumnoRadio">Alumno</label>
      <input type="radio" name="kind" value="Alumno" id="AlumnoRadio" (change)="onChange($event.target.value)">
      <label for="ProfesorRadio">Profesor</label>
      <input type="radio" name="kind" value="Profesor" id="ProfesorRadio" (change)="onChange($event.target.value)">

      <select name="type" [(ngModel)]="grant.type" [ngModelOptions]="{standalone: true}">
        <option *ngFor="let type of types">{{type}}</option>
      </select>

      <div class="field">
        <label for="AlumnName">Nombre del Alumno</label>
        <input type="text" value="{{grant?.alumn}}" #alumn required name="AlumnName"
               [formControl]="alumnControl">
      </div>

      <p *ngIf="alumnControl.errors && !form.pristine">
        {{alumnControl.errors | json}}
      </p>
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

      <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date" (dateInput)="log($event)">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

      <accordion>
        <accordion-group heading="Static Header, initially expanded">
          This content is straight in the template.
        </accordion-group>
        <accordion-group heading="Another group">
          <p>Some content</p>
        </accordion-group>
        <accordion-group heading="Another group">
          <p>Some content</p>
        </accordion-group>
        <accordion-group heading="Another group">
          <p>Some content</p>
        </accordion-group>
      </accordion>

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
  form: FormGroup;
  types = allTypes;

  alumnControl: FormControl;

  @Input() grant: any = {};
  @Output() grantDeleted = new EventEmitter();

  constructor(
    private grantsService: GrantsService,
    private formsBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.alumnControl = formsBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
      this.myValidator
    ]);

    this.alumnControl.valueChanges.subscribe(x => console.log(x));

    this.form = formsBuilder.group({
      alumnControl: this.alumnControl,
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

  ngOnInit() {
  }

  log(event) {
    console.log(event);
  }

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
    console.log(this.form);
    this.listSchools = this.schools.filter(x => x.includes(school));
  }

  selectSchool(school) {
    this.schoolSelected = school;
  }

  onChange(value) {
    console.log(value);
    if (value === 'Profesor') {
      this.types = ['Habitual'];
      this.grant.type = 'Habitual';
    } else {
      this.types = allTypes;
    }
  }

  myValidator(formControl: FormControl) {
    return formControl.value.includes('asdf') ? { InvalidValue: true } : {};
  }
}
