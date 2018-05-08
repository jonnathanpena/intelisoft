import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EntregaProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAll() {
    return this.http.get(this.urlProvider.getAllEntregas())
      .map((res: Response) => res.json());
  }

}
