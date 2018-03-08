import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  PuntoVentaProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public getAllProvincias() {
    return this.http.get(this.urlProvider.getAllProvincias())
      .map((res: Response) => res.json());
  }

  public getAllFiliales() {
    return this.http.get(this.urlProvider.getAllFiliales())
      .map((res: Response) => res.json());
  }

  public getAllPrecios() {
    return this.http.get(this.urlProvider.getAllPrecios())
      .map((res: Response) => res.json());
  }

  public getCantonesPorProvincia(objeto: any) {
    return this.http.post(this.urlProvider.getCantonesPorProvincia(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertPersonas(objeto: any) {
    return this.http.post(this.urlProvider.insertPersona(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertUsuario(objeto: any) {
    return this.http.post(this.urlProvider.insertUsuario(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertFilial(objeto: any) {
    return this.http.post(this.urlProvider.insertFilial(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertPrecio(objeto: any) {
    return this.http.post(this.urlProvider.insertPrecioArete(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public updatePersona(objeto: any) {
    return this.http.post(this.urlProvider.updatePersona(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public updateFilial(objeto: any) {
    return this.http.post(this.urlProvider.updateFilial(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public updateUsuario(objeto: any) {
    return this.http.post(this.urlProvider.updateUsuario(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
