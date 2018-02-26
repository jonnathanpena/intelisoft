import { Injectable } from '@angular/core';

@Injectable()
export class NavegacionProvider {

  public columnas: any = {
    izquierda: false,
    derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
  };

  constructor() {}

  public setColumnas(info) {
    this.columnas = {
      izquierda: info.izquierda,
      derecha: info.derecha
    };
  }

}
