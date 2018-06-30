import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const url = `https://data-grants.wedeploy.io/`;

const endpoint = 'centers';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient) {
  }

  createCenter(center: any = {}): any {
    const options = {
      body: JSON.stringify(center),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request((center.id ? 'PUT' : 'POST'), `${url}${endpoint}/${center.id || ''}`, options);
  }

  getCenters() {
    return this.http.get(`${url}${endpoint}/`);
  }

  getCenter(centerId): any {
    return this.http.get(`${url}${endpoint}/${centerId}`);
  }

  delete(centerId: any) {
    return this.http.delete(`${url}${endpoint}/${centerId}`);
  }
}
