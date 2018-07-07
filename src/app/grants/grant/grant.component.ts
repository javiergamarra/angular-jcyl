import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
  selector: 'comedores-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  form: FormGroup;
  types = allTypes;
  province;
  municipality;
  numParents = 0;

  alumnName: FormControl;

  @Input() grant: any = {};
  @Output() grantDeleted = new EventEmitter();

  @ViewChild('fathers', { read: ViewContainerRef }) inject: ViewContainerRef;

  constructor(
    private grantsService: GrantsService,
    private formsBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.alumnName = formsBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
      this.myValidator
    ]);

    this.form = formsBuilder.group({
      'alumnName': this.alumnName,
      'alumnSurname1': '',
      'alumnSurname2': '',
    });
    this.route.params
      .pipe(filter(x => x.id), mergeMap(x => this.grantsService.getGrant(x.id)))
      .subscribe(grant => {
        this.grant = grant;
        this.alumnName.setValue(this.grant.alumn.alumnName);
        this.form.controls.alumnSurname1.setValue(this.grant.alumn.alumnSurname1);
        this.form.controls.alumnSurname2.setValue(this.grant.alumn.alumnSurname2);
      });
  }

  ngOnInit() {
    this.grant.alumn = {};
  }

  addNewFather() {
    this.numParents++;
    const fatherComponentComponentRef = this.inject.createComponent(this.componentFactoryResolver.resolveComponentFactory(FatherComponent));
    fatherComponentComponentRef.instance.fatherFilled.subscribe(value => {
        this.fatherFilled(value, this.numParents);
      }
    );
  }

  submit() {
    this.grant.alumn = this.form.value;
    this.grantsService.createGrant(this.grant)
      .then(x => this.router.navigate(['grants', x.id]))
      .catch(err => console.log(err));
  }

  delete() {
    this.grantsService.deleteGrant(this.grant.id)
      .subscribe(
        _ => this.grantDeleted.emit(this.grant),
        err => console.log(err)
      );
  }

  selectSchool(school) {
    this.grant.center = school;
  }

  onChange(value) {
    if (value === 'Profesor') {
      this.types = ['Habitual'];
      this.grant.type = 'Habitual';
    } else {
      this.types = allTypes;
    }
  }

  myValidator(formControl: FormControl) {
    return formControl.value.includes('null') ? { InvalidValue: true } : {};
  }

  selectedProvince(province) {
    this.province = province;
  }

  selectedMunicipality(municipality) {
    this.municipality = municipality;
  }

  selectedCity(city) {
    this.grant.city = city;
  }

  fatherFilled(father, i) {
    if (!this.grant.father) {
      this.grant.father = [];
    }
    this.grant.father[i] = father;
  }

  storeDate($event) {
    this.grant.date = $event.value;
  }
}
