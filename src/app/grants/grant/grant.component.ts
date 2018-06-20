import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {filter, mergeMap} from 'rxjs/operators';
import {GrantsService} from '../grants.service';
import {FatherComponent} from '../../father/father.component';

const allTypes = [
  'Habitual',
  'Habitual discontinuo',
  'Esporadico',
  'Transportado'
];

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
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

  @ViewChild('fathers', { read: ViewContainerRef }) inject: ViewContainerRef;

  constructor(
    private grantsService: GrantsService,
    private formsBuilder: FormBuilder,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.alumnControl = formsBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
      this.myValidator
    ]);

    this.form = formsBuilder.group({
      alumnControl: this.alumnControl,
      grantName: '',
      date: ''
    });
    this.route.params
      .pipe(
        filter(x => x.id),
        mergeMap(x => this.grantsService.getGrant(x.id))
      )
      .subscribe(y => (this.grant = y));

  }

  ngOnInit() {
    this.inject.createComponent(this.componentFactoryResolver.resolveComponentFactory(FatherComponent));
  }

  submit() {
    this.grant = this.grant || this.form.value;
    this.grant.name = this.form.value.grantName;
    this.grant.alumn = this.form.value.alumnName;
    this.grantsService.createGrant(this.grant)
      .then(x => console.log(x))
      .catch(err => console.log(err));
  }

  delete() {
    this.grantDeleted.emit(this.grant);
    return false;
  }

  searchSchools(school) {
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
