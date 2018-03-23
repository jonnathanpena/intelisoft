import { Injectable } from '@angular/core';

@Injectable()
export class ClienteProvider {

  public cliente: any = {
    id_intcliente: undefined,
    cod_finca_intcli: undefined,
    nombre_finca_intcli: undefined,
    latitud_intcli: undefined,
    longitud_intcli: undefined,
    per_cli_intcli: undefined,
    nombre_intper: undefined,
    apellido_intper: undefined,
    cedula_intper: undefined,
    prov_canton_id: undefined,
    nombre_intprov: undefined,
    canton_per_id: undefined,
    nombre_intcant: undefined,
    parroquia_intper: undefined,
    direccion_intper: undefined,
    telefono_intper: undefined,
    correo_intper: undefined,
    contacto_cli_id: undefined,
    nombre_intcon: undefined,
    apellido_intcon: undefined,
    telefono_intcon: undefined,
    correo_intcon: undefined
  };

  constructor() {}

  public setCliente(info) {
    this.cliente = {
      id_intcliente: info.id_intcliente,
      cod_finca_intcli: info.cod_finca_intcli,
      nombre_finca_intcli: info.nombre_finca_intcli,
      latitud_intcli: info.latitud_intcli,
      longitud_intcli: info.longitud_intcli,
      per_cli_intcli: info.per_cli_intcli,
      nombre_intper: info.nombre_intper,
      apellido_intper: info.apellido_intper,
      cedula_intper: info.cedula_intper,
      prov_canton_id: info.prov_canton_id,
      nombre_intprov: info.nombre_intprov,
      canton_per_id: info.canton_per_id,
      nombre_intcant: info.nombre_intcant,
      parroquia_intper: info.parroquia_intper,
      direccion_intper: info.direccion_intper,
      telefono_intper: info.telefono_intper,
      correo_intper: info.correo_intper,
      contacto_cli_id: info.contacto_cli_id,
      nombre_intcon: info.nombre_intcon,
      apellido_intcon: info.apellido_intcon,
      telefono_intcon: info.telefono_intcon,
      correo_intcon: info.correo_intcon
    };
  }

}
