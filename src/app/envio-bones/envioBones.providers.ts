import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EnvioBonesProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public getAllBones() {
    return this.http.get(this.urlProvider.getAllBones())
      .map((res: Response) => res.json());
  }

  public getBonesToday() {
    return this.http.get(this.urlProvider.getBonesToday())
      .map((res: Response) => res.json());
  }

  public getBonesWeek() {
    return this.http.get(this.urlProvider.getBonesWeek())
      .map((res: Response) => res.json());
  }

  public getBonesMonth() {
    return this.http.get(this.urlProvider.getBonesMonth())
      .map((res: Response) => res.json());
  }

  public getBonesYear() {
    return this.http.get(this.urlProvider.getBonesYear())
      .map((res: Response) => res.json());
  }

  public updateBones(objeto: any) {
    return this.http.post(this.urlProvider.updateBones(), JSON.stringify(objeto), {
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

  public updateDespacho(objeto: any) {
    return this.http.post(this.urlProvider.updateDespacho(), JSON.stringify(objeto), {
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

}
