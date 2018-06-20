import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const url = `https://data-grants.wedeploy.io/grants/`;

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
  constructor(private http: HttpClient) {
  }

  createGrant(grant: any = {}): any {
    const options = {
      body: JSON.stringify(grant),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request((grant.id ? 'PUT' : 'POST'), url + grant.id, options)
      .toPromise();
  }

  deleteGrant(id): any {
    this.http
      .delete(url + id)
      .toPromise();
  }

  getGrants() {
    return this.http.get(url);
  }

  getGrant(grantId): any {
    return this.http.get(url + grantId);
  }

  getGrantsByQuery(query: string): any {
    const params = new HttpParams()
      .append('type', 'search')
      .append('filter', `[{"name": {"value": "${query}","operator": "match"}}]`);
    return this.http.get(url, { params });
  }

}
