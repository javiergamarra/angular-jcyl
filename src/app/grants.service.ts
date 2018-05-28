import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
  constructor(private http: HttpClient) {}

  create(alumn: any, name: any): any {
    return this.http
      .post(
        'https://data-grants.wedeploy.io/grants',
        JSON.stringify({ name, alumn }),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .toPromise()
      .then(x => console.log(x));
  }

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
