import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const url = `https://data-grants.wedeploy.io/grants/`;

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
        .put(url + grant.id, JSON.stringify(grant), headers)
        .toPromise()
        .then(x => console.log(x));
    } else {
      return this.http
        .post(url, JSON.stringify(grant), headers)
        .toPromise()
        .then(x => console.log(x));
    }
  }

  getQueryGrants(query: string): any {
    let params = new HttpParams().set('type', 'search');
    params = params.append(
      'filter',
      `[
        {
          "name": {
            "value": "${query}",
            "operator": "match"
          }
        }
      ]`
    );

    return this.http.get(url, { params });
  }

  getGrants() {
    return this.http.get(url);
  }

  getGrant(id): any {
    return this.http.get(url + id);
  }

  delete(id): any {
    this.http
      .delete(url + id)
      .toPromise()
      .then(x => console.log(x));
  }
}
