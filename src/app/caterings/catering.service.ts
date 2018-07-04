import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const endpoint = 'caterings';

@Injectable({
  providedIn: 'root'
})
export class CateringService {

  constructor(private http: HttpClient, @Inject('serverUrl') private url) {
  }

  createCatering(catering): any {
    const options = {
      body: JSON.stringify(catering),
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.request(catering.id ? 'PUT' : 'POST', `${this.url}${endpoint}/${catering.id || ''}`, options);
  }

  getCaterings() {
    return this.http.get(`${this.url}${endpoint}/`);
  }

  getCatering(cateringId = ''): any {
    return this.http.get(`${this.url}${endpoint}/${cateringId}`);
  }

  delete(cateringId: any) {
    return this.http.delete(`${this.url}${endpoint}/${cateringId}`);
  }
}
