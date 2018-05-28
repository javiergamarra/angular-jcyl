import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
  constructor(private http: HttpClient) {}

  getGrants() {
    return this.http.get('https://data-grants.wedeploy.io/grants').toPromise();
  }

  delete(id): any {
    this.http
      .delete(`https://data-grants.wedeploy.io/grants/${id}`)
      .toPromise()
      .then(x => console.log(x));
  }
}
