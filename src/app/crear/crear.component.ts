import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { NavegacionProvider } from './../providers/navegacion.provider';
import { CrearProvider } from './crear.providers';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.component.html',
  styleUrls: ['crear.component.css']
})

export class CrearComponent implements OnInit {
  cedula: any;
  provincias: any = [];
  cantones: any = [];
  cliente: any = {
    cod_finca_intcli: undefined,
    nombre_finca_intcli: undefined,
    per_cli_intcli: undefined,
    latitud_intcli: undefined,
    longitud_intcli: undefined,
    contacto_cli_id: undefined,
    nombre_intper: undefined,
    apellido_intper: undefined,
    cedula_intper: undefined,
    canton_per_id: undefined,
    parroquia_intper: undefined,
    direccion_intper: undefined,
    telefono_intper: undefined,
    correo_intper: undefined,
    per_cont_id: undefined,
    nombre_intcon: undefined,
    apellido_intcon: undefined,
    telefono_intcon: undefined,
    correo_intcon: undefined
  };
  private alert: any = {
    tipo: '',
    texto: ''
  };
  guardando: boolean;

  constructor(
    private navegacion: NavegacionProvider,
    private router: Router,
    private service: CrearProvider) {}

  ngOnInit() {
    this.cedula = '';
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
    this.provincias = [];
    this.service.getAllProvincias().subscribe(resp => {
      console.log('provincias', resp.data);
      this.provincias = resp.data;
    });
    this.cantones = [];
    this.cliente.cod_finca_intcli = '';
    this.cliente.nombre_finca_intcli = '';
    this.cliente.per_cli_intcli = 0;
    this.cliente.latitud_intcli = '';
    this.cliente.longitud_intcli = '';
    this.cliente.contacto_cli_id = 0;
    this.cliente.nombre_intper = '';
    this.cliente.apellido_intper = '';
    this.cliente.cedula_intper = '';
    this.cliente.parroquia_intper = '';
    this.cliente.direccion_intper = '';
    this.cliente.telefono_intper = '';
    this.cliente.correo_intper = '';
    this.cliente.per_cont_id = '';
    this.cliente.nombre_intcon = '';
    this.cliente.apellido_intcon = '';
    this.cliente.telefono_intcon = '';
    this.cliente.correo_intcon = '';
    this.guardando = false;
  }

  guardar(e) {
    e.preventDefault();
    this.guardando = true;
    this.insertPersona();
  }

  insertPersona() {
    this.service.insertPersona(this.cliente).subscribe(resp => {
      console.log('insert persona', resp['_body']);
      if (resp['_body'] !== 'false') {
        this.insertContacto(resp['_body']);
      } else {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
        this.ngOnInit();
      }
    });
  }

  insertContacto(idpersona) {
    this.cliente.per_cli_intcli = idpersona;
    this.cliente.per_cont_id = idpersona;
    this.service.insertContacto(this.cliente).subscribe(resp => {
      console.log('insert contacto', resp['_body']);
      if (resp['_body'] !== 'false') {
        this.insertCliente(resp['_body']);
      } else {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
        this.ngOnInit();
      }
    });
  }

  insertCliente(idcontacto) {
    this.cliente.contacto_cli_id = idcontacto;
    this.service.insertCliente(this.cliente).subscribe(resp => {
      console.log('insert cliente', resp['_body']);
      if (resp['_body'] !== 'false') {
        this.alert.texto = '¡Guardado exitosamente!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
        this.ngOnInit();
      } else {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
        this.ngOnInit();
      }
    });
  }

  cancelar() {
    this.router.navigate(['/dashboard/consultar']);
  }

  cambioProvincia(e) {
    console.log('cambio provincia', e);
    const id = e.value * 1;
    this.service.getCantonByProvincia({prov_canton_id: id}).subscribe(resp => {
      const cant = JSON.parse(resp['_body']);
      console.log('cantones', cant);
      this.cantones = cant.data;
    });
  }

  cambioCanton(e) {
    console.log('cambio cantón', e);
    const id = e.value * 1;
    this.cliente.canton_per_id = id;
  }
}
