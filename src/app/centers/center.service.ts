import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const endpoint = 'centers';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient, @Inject('serverUrl') private serverUrl) {
  }

  createCenter(center): any {
    const options = {
      body: JSON.stringify(center),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request((center.id ? 'PUT' : 'POST'), `${this.serverUrl}${endpoint}/${center.id || ''}`, options);
  }

  getCenters() {
    return this.http.get(`${this.serverUrl}${endpoint}/`);
  }

  getCenter(centerId): any {
    return this.http.get(`${this.serverUrl}${endpoint}/${centerId}`);
  }

  delete(centerId: any) {
    return this.http.delete(`${this.serverUrl}${endpoint}/${centerId}`);
  }
}
