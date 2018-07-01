import {Component, OnInit} from '@angular/core';
import {CenterService} from '../center.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, flatMap} from 'rxjs/operators';

@Component({
  selector: 'comedores-center',
  template: `
    <div class="ui form">

      <hr/>

      <div class="field" class="menu-ancho">
        <label for="CenterName">Nombre del Centro</label>
        <input type="text" value="{{center?.name}}" #name required name="CenterName">
      </div>

      <br/>

      <button (click)="submit(name.value)">Enviar</button>
    </div>
  `,
})
export class CenterComponent implements OnInit {

  center;

  constructor(private centerService: CenterService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.pipe(
      filter(param => param.id),
      flatMap(param => this.centerService.getCenter(param.id))
    ).subscribe(
      center => this.center = center,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.center = {};
  }

  submit(name) {
    console.log(this.center);
    this.center.name = name;
    this.centerService.createCenter(this.center)
      .subscribe(
        _ => this.router.navigate(['centers']),
        err => console.log(err)
      );
  }

}
