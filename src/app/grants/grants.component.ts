import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  values = [
    {
      name: 'Solicitud 1',
      alumn: 'Javier',
      warning: true
    },
    {
      name: 'Solicitud 2',
      alumn: 'Jorge',
      warning: true,
      admin: true
    }
  ];

  grants = this.values;
  grant: any;

  constructor() {}

  ngOnInit() {}

  search(alumnFilter) {
    this.grants = this.values.filter(x =>
      x.alumn.toLowerCase().includes(alumnFilter.value.toLowerCase())
    );
    return false;
  }

  edit(grant) {
    this.grant = grant;
  }

  update(alumn, name) {
    this.grant.alumn = alumn.value;
    this.grant.name = name.value;
    return false;
  }
}
