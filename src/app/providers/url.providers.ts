import { Injectable } from '@angular/core';

@Injectable()
export class ULRProvider {

  private dominio: String = 'http://localhost/intelisoft/api/';

  /*Login*/
  public entrar() {
    return this.dominio + 'login/entrar.php';
  }

  public insertLogLogin() {
    return this.dominio + 'login/log.php';
  }

  public getIP() {
    return 'http://ip-api.com/json';
  }

  public getLogLogin() {
    return this.dominio + 'login/getLog.php';
  }

  /*Provincias*/
  public getAllProvincias() {
    return this.dominio + 'provincias/getAll.php';
  }

  /*Cantones*/
  public getCantonByProvincia() {
    return this.dominio + 'cantones/getByProvincia.php';
  }

  /*Peronas*/
  public insertPersona() {
    return this.dominio + 'personas/insert.php';
  }

  /*Contacto*/
  public insertContacto() {
    return this.dominio + 'contacto/insert.php';
  }

  /*Cliente*/
  public insertCliente() {
    return this.dominio + 'clientes/insert.php';
  }

  public getClienteByCi() {
    return this.dominio + 'clientes/getByCi.php';
  }

  /*Orden*/
  public insertOrden() {
    return this.dominio + 'orden/insert.php';
  }

  public insertLogOrden() {
    return this.dominio + 'orden/insertLog.php';
  }

  public insertDetalleOrdenCompra() {
    return this.dominio + 'detalle_orden_compra/insert.php';
  }

  public updateEstatusOrden() {
    return this.dominio + 'orden/updateEstatus.php';
  }

  /*Costos*/
  public getCosto() {
    return this.dominio + 'precio_arete/getUltimo.php';
  }

  public getAllCostos() {
    return this.dominio + 'precio_arete/getAll.php';
  }

}
