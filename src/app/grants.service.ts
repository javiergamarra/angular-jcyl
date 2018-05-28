import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
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

  constructor() {}

  getGrants() {
    return this.values;
  }
}
