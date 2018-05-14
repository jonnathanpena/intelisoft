import { ULRProvider } from '../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EntregaProvider {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getEntregaByCID(objeto: any) {
    return this.http.post(this.urlProvider.getEntregaByCI(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public entregar(objeto: any) {
    return this.http.post(this.urlProvider.entregar(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
