import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  DespachoProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAll() {
    return this.http.get(this.urlProvider.getAllDespachos())
      .map((res: Response) => res.json());
  }

}
