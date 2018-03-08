import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  DataPrecioProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public getAll() {
    return this.http.get(this.urlProvider.getAllPrecios())
      .map((res: Response) => res.json());
  }

  public getUltimo() {
    return this.http.get(this.urlProvider.getUltimoPrecio())
      .map((res: Response) => res.json());
  }

  public insertPrecio(objeto: any) {
    return this.http.post(this.urlProvider.insertPrecioArete(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
