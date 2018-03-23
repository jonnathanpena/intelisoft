import { ULRProvider } from '../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  DashboardProvider {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getLogLogin(objeto: any) {
    return this.http.post(this.urlProvider.getLogLogin(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public geIP() {
    return this.http.get(this.urlProvider.getIP())
      .map((res: Response) => res.json());
  }

  public insertIP(objeto: any) {
    return this.http.post(this.urlProvider.insertLogLogin(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
