import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private protocol = 'https://';
  private database = `angular-class-bca1e.firebaseio`;
  private domain = '.com/test/';
  constructor(private http: HttpClient) { }

  private getBaseUrl(): string {
    return this.protocol + this.database + this.domain;
  }
  public get(url: string) {
    return this.http.get(this.getBaseUrl() + url + '.json');
  }
  public post(url: string, body: any) {
    return this.http.post(this.getBaseUrl() + url + '.json', body);
  }
}
