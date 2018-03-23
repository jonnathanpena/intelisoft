import { ULRProvider } from '../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  CrearProvider {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAllProvincias() {
    return this.http.get(this.urlProvider.getAllProvincias())
      .map((res: Response) => res.json());
  }

  public getCantonByProvincia(objeto: any) {
    return this.http.post(this.urlProvider.getCantonByProvincia(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertPersona(objeto: any) {
    return this.http.post(this.urlProvider.insertPersona(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertContacto(objeto: any) {
    return this.http.post(this.urlProvider.insertContacto(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertCliente(objeto: any) {
    return this.http.post(this.urlProvider.insertCliente(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
