import {Component, OnInit} from '@angular/core';
import {CenterService} from '../center.service';
import {Router} from '@angular/router';

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
  styles: ['']
})
export class CenterComponent implements OnInit {

  constructor(private centerService: CenterService, private router: Router) {
  }

  ngOnInit() {
  }

  submit(name) {
    this.centerService.createCenter({ name })
      .subscribe(
        _ => this.router.navigate(['centers']),
        err => console.log(err)
      );
  }

}
