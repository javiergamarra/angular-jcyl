import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
  constructor(private http: HttpClient) {}

  create(grant: any = {}): any {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (grant.id) {
      return this.http
        .put(
          `https://data-grants.wedeploy.io/grants/${grant.id}`,
          JSON.stringify(grant),
          headers
        )
        .toPromise()
        .then(x => console.log(x));
    } else {
      return this.http
        .post(
          'https://data-grants.wedeploy.io/grants',
          JSON.stringify(grant),
          headers
        )
        .toPromise()
        .then(x => console.log(x));
    }
  }

  getQueryGrants(query: string): any {
    let params = new HttpParams().set('type', 'search');
    params = params.append(
      'filter',
      `[{"name": {"value": {"query": "${query}"}, "operator": "similar"}}]`
    );

    return this.http
      .get('https://data-grants.wedeploy.io/grants', {params});
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
