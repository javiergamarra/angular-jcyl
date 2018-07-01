import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const url = `https://data-grants.wedeploy.io/`;

const endpoint = 'caterings';

@Injectable({
  providedIn: 'root'
})
export class CateringService {

  constructor(private http: HttpClient) {
  }

  createCatering(catering): any {
    const options = {
      body: JSON.stringify(catering),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request(catering.id ? 'PUT' : 'POST', `${url}${endpoint}/${catering.id || ''}`, options);
  }

  getCaterings() {
    return this.http.get(`${url}${endpoint}/`);
  }

  getCatering(cateringId = ''): any {
    return this.http.get(`${url}${endpoint}/${cateringId}`);
  }

  delete(cateringId: any) {
    return this.http.delete(`${url}${endpoint}/${cateringId}`);
  }
}
