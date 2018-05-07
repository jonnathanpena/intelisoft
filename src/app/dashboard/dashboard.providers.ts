import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  DashboardProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getUsuarios() {
    return this.http.get(this.urlProvider.getUsuariosPV())
      .map((res: Response) => res.json());
  }

  public getImpresoras() {
    return this.http.get(this.urlProvider.getImpresoras())
      .map((res: Response) => res.json());
  }

  public getBones() {
    return this.http.get(this.urlProvider.getBones())
      .map((res: Response) => res.json());
  }

  public getClientes() {
    return this.http.get(this.urlProvider.getCantidadClientes())
      .map((res: Response) => res.json());
  }

  public getAllProvincias() {
    return this.http.get(this.urlProvider.getAllProvincias())
      .map((res: Response) => res.json());
  }

  public getGraficaInit() {
    return this.http.get(this.urlProvider.getGraficaInit())
      .map((res: Response) => res.json());
  }

  public getByCi(objeto: any) {
    return this.http.post(this.urlProvider.getClienteByCi(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
