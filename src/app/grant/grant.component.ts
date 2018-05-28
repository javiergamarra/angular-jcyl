import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grant',
  template: `
  <h1>Nueva Solicitud</h1>

  <form class="ui form">
    <div class="field">
      <label for="AlumnName">Nombre del Alumno</label>
      <input type="text" id="AlumnName" value="{{grant?.alumn}}" #alumn>
    </div>
    <div class="field">
      <label for="GrantName">Solicitud</label>
      <input type="text" id="GrantName" value="{{grant?.name}}" #name>
    </div>

    <button (click)="update(alumn, name)">Actualizar</button>
  </form>
  `,
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  @Input() grant;

  constructor() {}

  ngOnInit() {}

  update(alumn, name) {
    this.grant.alumn = alumn.value;
    this.grant.name = name.value;
    return false;
  }
}
