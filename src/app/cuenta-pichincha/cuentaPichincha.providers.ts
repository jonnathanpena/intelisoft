import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  CuentaPichinchaProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAll() {
    return this.http.get(this.urlProvider.getAllPagos())
      .map((res: Response) => res.json());
  }

  public getToday() {
    return this.http.get(this.urlProvider.getPagosToday())
      .map((res: Response) => res.json());
  }

  public getWeek() {
    return this.http.get(this.urlProvider.getPagosWeek())
      .map((res: Response) => res.json());
  }

  public getMonth() {
    return this.http.get(this.urlProvider.getPagosMonth())
      .map((res: Response) => res.json());
  }

  public getYear() {
    return this.http.get(this.urlProvider.getPagosYear())
      .map((res: Response) => res.json());
  }

  public getOrdenById(objeto: any) {
    return this.http.post(this.urlProvider.getOrdenById(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insert(objeto: any) {
    return this.http.post(this.urlProvider.insertPago(), JSON.stringify(objeto), {
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

  public insertSueltos(objeto: any) {
    return this.http.post(this.urlProvider.insertSueltos(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertApiSifae(objeto: any) {
    return this.http.post(this.urlProvider.insertApiSifae(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertDetalleSifae(objeto: any) {
    return this.http.post(this.urlProvider.insertDetalleSifae(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertDetalleImpresoraBones(objeto: any) {
    return this.http.post(this.urlProvider.insertDetalleImpresorasBones(), JSON.stringify(objeto), {
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
