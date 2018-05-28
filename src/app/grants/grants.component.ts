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
      created: new Date(),
      warning: true
    },
    {
      name: 'Solicitud 2',
      alumn: 'Jorge',
      warning: true,
      created: new Date(),
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

  delete(grant) {
    this.grants = this.values.filter(x =>
      !x.alumn.toLowerCase().includes(grant.alumn.toLowerCase())
    );
  }
}
