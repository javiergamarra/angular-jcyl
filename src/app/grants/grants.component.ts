import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grant: any = {};

  constructor() {}

  ngOnInit() {
    setTimeout(() =>
      this.grant = {
        name: 'Solicitud 1',
        alumn: 'Javier Gamarra',
        warning: true
      }
    , 2000);
  }

  edit() {
    console.log(this.grant);
  }

  update(alumn, name) {
    this.grant.alumn = alumn.value;
    this.grant.name = name.value;
    return false;
  }
}
