import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grant = {};

  constructor() {}

  ngOnInit() {
    setTimeout(() =>
      this.grant = {
        name: 'Solicitud 1',
        alumno: 'Javier Gamarra'
      }
    , 2000);
  }
}
