import { ULRProvider } from '../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  OrdenProvider {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public gePrecio() {
    return this.http.get(this.urlProvider.getCosto())
      .map((res: Response) => res.json());
  }

  public insertOrden(objeto: any) {
    return this.http.post(this.urlProvider.insertOrden(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertDetalleOrdenCompra(objeto: any) {
    return this.http.post(this.urlProvider.insertDetalleOrdenCompra(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public insertLogOrden(objeto: any) {
    return this.http.post(this.urlProvider.insertLogOrden(), JSON.stringify(objeto), {
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
