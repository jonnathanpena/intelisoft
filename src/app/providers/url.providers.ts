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

  /*Control Punto de Venta*/
  public getAllLogs() {
    return this.dominio + 'login/getAllLog.php';
  }

  public getLogsToday() {
    return this.dominio + 'login/getLogToday.php';
  }

  public getLogsWeek() {
    return this.dominio + 'login/getLogWeek.php';
  }

  public getLogsMonth() {
    return this.dominio + 'login/getLogMonth.php';
  }

  public getLogsYear() {
    return this.dominio + 'login/getLogYear.php';
  }

  /*Pagos*/
  public insertPago() {
    return this.dominio + 'pagos/insert.php';
  }

  public getAllPagos() {
    return this.dominio + 'pagos/getAll.php';
  }

  public getPagosToday() {
    return this.dominio + 'pagos/getToday.php';
  }

  public getPagosWeek() {
    return this.dominio + 'pagos/getWeek.php';
  }

  public getPagosMonth() {
    return this.dominio + 'pagos/getMonth.php';
  }

  public getPagosYear() {
    return this.dominio + 'pagos/getYear.php';
  }

  /*Orden*/
  public getOrdenById() {
    return this.dominio + 'orden/getById.php';
  }

  public updateEstatusOrden() {
    return this.dominio + 'orden/updateEstatus.php';
  }

  public insertLogEstatusOrden() {
    return this.dominio + 'orden/insertLog.php';
  }

  /*Clientes*/
  public getAllClientes() {
    return this.dominio + 'clientes/getAll.php';
  }

  public getClienteByCi() {
    return this.dominio + 'clientes/getByCi.php';
  }

  /*Date precio*/
  public getAllDataPrecio() {
    return this.dominio + 'data_precio/getAll.php';
  }

  public getDataPrecioToday() {
    return this.dominio + 'data_precio/getToday.php';
  }

  public getDataPrecioWeek() {
    return this.dominio + 'data_precio/getWeek.php';
  }

  public getDataPrecioMonth() {
    return this.dominio + 'data_precio/getMonth.php';
  }

  public getDataPrecioYear() {
    return this.dominio + 'data_precio/getYear.php';
  }

  /*Pendientes*/
  public getAllPendientes() {
    return this.dominio + 'pendientes/getAll.php';
  }

  /*Impresoras*/
  public getAllZebra() {
    return this.dominio + 'impresoras/getAllZebra.php';
  }

  public getZebraToday() {
    return this.dominio + 'impresoras/getZebraToday.php';
  }

  public getZebraWeek() {
    return this.dominio + 'impresoras/getZebraWeek.php';
  }

  public getZebraMonth() {
    return this.dominio + 'impresoras/getZebraMonth.php';
  }

  public getZebraYear() {
    return this.dominio + 'impresoras/getZebraYear.php';
  }

  public getAllGrabadora() {
    return this.dominio + 'impresoras/getAllGrabadora.php';
  }

  public getGrabadoraToday() {
    return this.dominio + 'impresoras/getGrabadoraToday.php';
  }

  public getGrabadoraWeek() {
    return this.dominio + 'impresoras/getGrabadoraWeek.php';
  }

  public getGrabadoraMonth() {
    return this.dominio + 'impresoras/getGrabadoraMonth.php';
  }

  public getGrabadoraYear() {
    return this.dominio + 'impresoras/getGrabadoraYear.php';
  }

  public getAllImpresora() {
    return this.dominio + 'impresoras/getAllImpresora.php';
  }

  public getImpresoraToday() {
    return this.dominio + 'impresoras/getImpresoraToday.php';
  }

  public getImpresoraWeek() {
    return this.dominio + 'impresoras/getImpresoraWeek.php';
  }

  public getImpresoraMonth() {
    return this.dominio + 'impresoras/getImpresoraMonth.php';
  }

  public getImpresoraYear() {
    return this.dominio + 'impresoras/getImpresoraYear.php';
  }

  public getAllBones() {
    return this.dominio + 'impresoras/getAllBones.php';
  }

  public getBonesToday() {
    return this.dominio + 'impresoras/getBonesToday.php';
  }

  public getBonesWeek() {
    return this.dominio + 'impresoras/getBonesWeek.php';
  }

  public getBonesMonth() {
    return this.dominio + 'impresoras/getBonesMonth.php';
  }

  public getBonesYear() {
    return this.dominio + 'impresoras/getBonesYear.php';
  }

  public updateImpresora() {
    return this.dominio + 'impresoras/updateImpresora.php';
  }

  public updateBones() {
    return this.dominio + 'impresoras/updateBones.php';
  }

  /*detalle_sifa*/
  public insertDetalleSifae() {
    return this.dominio + 'detalle_sifae/insert.php';
  }

  public updateDespacho() {
    return this.dominio + 'detalle_sifae/updateDespacho.php';
  }

  /*Dashboard*/
  public getUsuariosPV() {
    return this.dominio + 'dashboard/getUsuarios.php';
  }

  public getImpresoras() {
    return this.dominio + 'dashboard/getImpresoras.php';
  }

  public getBones() {
    return this.dominio + 'dashboard/getBones.php';
  }

  public getCantidadClientes() {
    return this.dominio + 'dashboard/getClientes.php';
  }

  public getGraficaInit() {
    return this.dominio + 'dashboard/getGraficaInit.php';
  }

  /*sueltos*/
  public insertSueltos() {
    return this.dominio + 'sueltos/insert.php';
  }

  public getAllSueltos() {
    return this.dominio + 'sueltos/getAll.php';
  }

  public deleteSueltos() {
    return this.dominio + 'sueltos/delete.php';
  }

  /*api_sifae*/
  public insertApiSifae() {
    return this.dominio + 'api_sifae/insert.php';
  }

  /* detalle_impresora_bones */
  public insertDetalleImpresorasBones() {
    return this.dominio + 'detalle_impresora_bones/insert.php';
  }

  /* despacho */
  public getAllDespachos() {
    return this.dominio + 'despachos/getAll.php';
  }

  /* entregas */
  public getAllEntregas() {
    return this.dominio + 'entregas/getAll.php';
  }

}
