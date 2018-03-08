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

  public updatePersona() {
    return this.dominio + 'personas/update.php';
  }

  /*Usuarios*/
  public insertUsuario() {
    return this.dominio + 'usuarios/insert.php';
  }

  public updateUsuario() {
    return this.dominio + 'usuarios/update.php';
  }

  /*Filiales*/
  public insertFilial() {
    return this.dominio + 'filiales/insert.php';
  }

  public getAllFiliales() {
    return this.dominio + 'filiales/getAll.php';
  }

  public updateFilial() {
    return this.dominio + 'filiales/update.php';
  }

  /*Precio Arete*/
  public getAllPrecios() {
    return this.dominio + 'precio_arete/getAll.php';
  }

  public getUltimoPrecio() {
    return this.dominio + 'precio_arete/getUltimo.php';
  }

  public insertPrecioArete() {
    return this.dominio + 'precio_arete/insert.php';
  }

}
