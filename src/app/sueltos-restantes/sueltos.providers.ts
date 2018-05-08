import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { stringify } from 'querystring';

@Injectable()
export class  SueltosProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public getAll() {
    return this.http.get(this.urlProvider.getAllSueltos())
      .map((res: Response) => res.json());
  }

  public delete(objeto: any) {
    return this.http.post(this.urlProvider.deleteSueltos(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
