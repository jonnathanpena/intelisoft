import { ULRProvider } from './../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EnvioImpresoraProviders {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}


  public getAllZebra() {
    return this.http.get(this.urlProvider.getAllZebra())
      .map((res: Response) => res.json());
  }

  public getZebraToday() {
    return this.http.get(this.urlProvider.getZebraToday())
      .map((res: Response) => res.json());
  }

  public getZebraWeek() {
    return this.http.get(this.urlProvider.getZebraWeek())
      .map((res: Response) => res.json());
  }

  public getZebraMonth() {
    return this.http.get(this.urlProvider.getZebraMonth())
      .map((res: Response) => res.json());
  }

  public getZebraYear() {
    return this.http.get(this.urlProvider.getZebraYear())
      .map((res: Response) => res.json());
  }

  public getAllImpresora() {
    return this.http.get(this.urlProvider.getAllImpresora())
      .map((res: Response) => res.json());
  }

  public getImpresoraToday() {
    return this.http.get(this.urlProvider.getImpresoraToday())
      .map((res: Response) => res.json());
  }

  public getImpresoraWeek() {
    return this.http.get(this.urlProvider.getImpresoraWeek())
      .map((res: Response) => res.json());
  }

  public getImpresoraMonth() {
    return this.http.get(this.urlProvider.getImpresoraMonth())
      .map((res: Response) => res.json());
  }

  public getImpresoraYear() {
    return this.http.get(this.urlProvider.getImpresoraYear())
      .map((res: Response) => res.json());
  }

  public getAllGrabadora() {
    return this.http.get(this.urlProvider.getAllGrabadora())
      .map((res: Response) => res.json());
  }

  public getGrabadoraToday() {
    return this.http.get(this.urlProvider.getGrabadoraToday())
      .map((res: Response) => res.json());
  }

  public getGrabadoraWeek() {
    return this.http.get(this.urlProvider.getGrabadoraWeek())
      .map((res: Response) => res.json());
  }

  public getGrabadoraMonth() {
    return this.http.get(this.urlProvider.getGrabadoraMonth())
      .map((res: Response) => res.json());
  }

  public getGrabadoraYear() {
    return this.http.get(this.urlProvider.getGrabadoraYear())
      .map((res: Response) => res.json());
  }

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

  public updateImpresora(objeto: any) {
    return this.http.post(this.urlProvider.updateImpresora(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

  public updateBones(objeto: any) {
    return this.http.post(this.urlProvider.updateBones(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
