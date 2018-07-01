import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, flatMap} from 'rxjs/operators';
import {CateringService} from '../catering.service';

@Component({
  selector: 'comedores-catering-company',
  template: `
    <div class="ui form">

      <hr/>

      <div class="field" class="menu-ancho">
        <label for="CateringName">Nombre del Catering</label>
        <input type="text" value="{{catering?.name}}" #name required name="CateringName">
      </div>

      <div class="field">
        <label for="CateringRegularPrice">Precio habitual</label>
        <input type="text" value="{{catering?.regular_price}}" #regular required name="CateringRegularPrice">
      </div>

      <div class="field">
        <label for="CateringSporadicPrice">Precio esporádico</label>
        <input type="text" value="{{catering?.sporadic_price}}" #sporadic required name="CateringSporadicPrice">
      </div>
      <br/>

      <button (click)="submit(name.value, regular.value, sporadic.value)">Enviar</button>
    </div>
  `,
})
export class CateringCompanyComponent implements OnInit {

  catering;

  constructor(private cateringService: CateringService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.pipe(
      filter(param => param.id),
      flatMap(param => this.cateringService.getCatering(param.id)),
    ).subscribe(
      catering => this.catering = catering,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.catering = {};
  }

  submit(name, regular, sporadic) {
    this.catering.name = name;
    this.catering.regular_price = regular;
    this.catering.sporadic_price = sporadic;

    this.cateringService.createCatering(this.catering)
      .subscribe(
        _ => this.router.navigate(['caterings']),
        err => console.log(err)
      );
  }

}
