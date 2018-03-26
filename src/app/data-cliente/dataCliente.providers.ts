import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  DataClienteProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAll() {
    return this.http.get(this.urlProvider.getAllClientes())
      .map((res: Response) => res.json());
  }

  public getByCi(objeto: any) {
    return this.http.post(this.urlProvider.getClienteByCi(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
