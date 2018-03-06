import { Injectable } from '@angular/core';

@Injectable()
export class ULRProvider {

  public dominio: String = 'http://localhost/intelisoft/api/';

  /*Provincias*/
  public getAllProvincias() {
    return this.dominio + 'provincias/getAll.php';
  }

  /*Get cantones por provincia*/
  public getCantonesPorProvincia() {
    return this.dominio + 'cantones/getByProvincia.php';
  }

  /*Personas*/
  public insertPersona() {
    return this.dominio + 'personas/insert.php';
  }

  /*Usuarios*/
  public insertUsuario() {
    return this.dominio + 'usuarios/insert.php';
  }

  /*Filiales*/
  public insertFilial() {
    return this.dominio + 'filiales/insert.php';
  }

}
