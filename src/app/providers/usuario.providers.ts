import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioProvider {

  public usuario: any = {
    id_intusuario: '',
    per_usu_id: '',
    usuario_intusu: '',
    clave_intusu: '',
    tipo_usuario_intusu: '',
    activo: '',
    id_intempresa: '',
    nombre_intemp: '',
    usu_emp_id: '',
    comision_intemp: '',
    id_intpersona: '',
    nombre_intper: '',
    apellido_intper: '',
    cedula_intper: '',
    canton_per_id: '',
    parroquia_intper: '',
    direccion_intper: '',
    telefono_intper: '',
    correo_intper: ''
  };

  constructor() {}

  public setUsuario(info) {
    this.usuario = {
      id_intusuario: info.id_intusuario,
      per_usu_id: info.per_usu_id,
      usuario_intusu: info.usuario_intusu,
      clave_intusu: info.clave_intusu,
      tipo_usuario_intusu: info.tipo_usuario_intusu,
      activo: info.activo,
      id_intempresa: info.id_intempresa,
      nombre_intemp: info.nombre_intemp,
      usu_emp_id: info.usu_emp_id,
      comision_intemp: info.comision_intemp,
      id_intpersona: info.id_intpersona,
      nombre_intper: info.nombre_intper,
      apellido_intper: info.apellido_intper,
      cedula_intper: info.cedula_intper,
      canton_per_id: info.canton_per_id,
      parroquia_intper: info.parroquia_intper,
      direccion_intper: info.direccion_intper,
      telefono_intper: info.telefono_intper,
      correo_intper: info.correo_intper
    };
  }

}
