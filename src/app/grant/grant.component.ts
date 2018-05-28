import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GrantsService } from '../grants.service';

@Component({
  selector: 'app-grant',
  template: `
  <h1>{{grant?.id ? 'Actualizar' : 'Nueva'}} Solicitud</h1>

  <form class="ui form">
    <div class="field">
      <label for="AlumnName">Nombre del Alumno</label>
      <input type="text" id="AlumnName" value="{{grant?.alumn}}" #alumn>
    </div>
    <div class="field">
      <label for="GrantName">Solicitud</label>
      <input type="text" id="GrantName" value="{{grant?.name}}" #name>
    </div>

    <button (click)="save(alumn, name)">{{grant?.id ? 'Actualizar' : 'Guardar'}}</button>
    <button (click)="delete()">Eliminar</button>
  </form>
  `,
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  @Input() grant;
  @Output() grantDeleted = new EventEmitter();

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {
  }

  save(alumn, name) {
    this.grant = this.grant || {};
    this.grant.alumn = alumn.value;
    this.grant.name = name.value;
    this.grantsService.create(this.grant);
    return false;
  }

  delete() {
    this.grantDeleted.emit(this.grant);
    return false;
  }
}
