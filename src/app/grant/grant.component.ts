import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant',
  template: `
  <form class="ui form">
    <div class="field">
      <label for="AlumnName">Nombre del Alumno</label>
      <input type="text" id="AlumnName" value="{{grant.alumn}}">
    </div>
    <div class="field">
      <label for="GrantName">Solicitud</label>
      <input type="text" id="GrantName" value="{{grant.name}}">
   </div>
  </form>
  `,
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
