import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const endpoint = 'grant/';

@Injectable({
  providedIn: 'root'
})
export class GrantsService {
  constructor(private http: HttpClient, @Inject('serverUrl') private serverUrl) {
  }

  createGrant(grant: any = {}): any {
    const options = {
      body: JSON.stringify(grant),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request((grant.id ? 'PUT' : 'POST'), this.serverUrl + endpoint + (grant.id || ''), options)
      .toPromise();
  }

  deleteGrant(id): any {
    return this.http.delete(this.serverUrl + endpoint + id);
  }

  getGrants() {
    return this.http.get(this.serverUrl + endpoint);
  }

  getGrant(grantId): any {
    return this.http.get(this.serverUrl + endpoint + grantId);
  }

  getGrantsByQuery(query: string): any {
    const params = new HttpParams()
      .append('type', 'search')
      .append('filter', `[{"name": {"value": "${query}","operator": "match"}}]`);
    return this.http.get(this.serverUrl + endpoint, { params });
  }

}
