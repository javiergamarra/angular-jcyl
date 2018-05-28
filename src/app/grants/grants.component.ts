import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants = [
    {
      name: 'Solicitud 1',
      alumn: 'Javier Gamarra',
      warning: true
    },
    {
      name: 'Solicitud 1',
      alumn: 'Javier Gamarra',
      warning: true
    }
  ];
  grant: any;

  constructor() {}

  ngOnInit() {}

  edit(grant) {
    this.grant = grant;
  }

  update(alumn, name) {
    this.grant.alumn = alumn.value;
    this.grant.name = name.value;
    return false;
  }
}
