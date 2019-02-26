import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getBaseUrl } from '../main';

@Injectable()
export class RestService {
  private headers: HttpHeaders;
  private accessPointUrl: string = '';

  constructor(private http: HttpClient) {
    //; charset=utf-8
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.accessPointUrl = getBaseUrl().toString() + 'api/taskItems';
  }

  public get() {
    // Get all data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers, withCredentials: true });
  }

  public remove(payload) {
    var url = this.accessPointUrl + '/' + payload.id;
    return this.http.delete(url, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, { headers: this.headers });
  }
}
