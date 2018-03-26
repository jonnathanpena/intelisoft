import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EnvioImpresoraProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAll() {
    return this.http.get(this.urlProvider.getAllPagos())
      .map((res: Response) => res.json());
  }

  public getOrdenById(objeto: any) {
    return this.http.post(this.urlProvider.getOrdenById(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertLogEstatusOrden(objeto: any) {
    return this.http.post(this.urlProvider.insertLogEstatusOrden(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public updateEstatusOrden(objeto: any) {
    return this.http.post(this.urlProvider.updateEstatusOrden(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
