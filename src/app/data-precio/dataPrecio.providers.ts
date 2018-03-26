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
    return this.http.get(this.urlProvider.getAllDataPrecio())
      .map((res: Response) => res.json());
  }

  public getToday() {
    return this.http.get(this.urlProvider.getDataPrecioToday())
      .map((res: Response) => res.json());
  }

  public getWeek() {
    return this.http.get(this.urlProvider.getDataPrecioWeek())
      .map((res: Response) => res.json());
  }

  public getMonth() {
    return this.http.get(this.urlProvider.getDataPrecioMonth())
      .map((res: Response) => res.json());
  }

  public getYear() {
    return this.http.get(this.urlProvider.getDataPrecioYear())
      .map((res: Response) => res.json());
  }

}
