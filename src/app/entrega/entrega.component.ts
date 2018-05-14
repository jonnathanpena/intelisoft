import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { NavegacionProvider } from './../providers/navegacion.provider';
import { EntregaProvider } from './entrega.providers';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-entrega',
  templateUrl: 'entrega.component.html',
  styleUrls: ['entrega.component.css']
})

export class EntregaComponent implements OnInit {
  cedula: any;
  despachado: boolean;
  entregado: boolean;
  cliente: any = {};
  resultados: boolean;
  guardando: boolean;
  seleccionar: boolean;
  checkEntregado: any;
  private alert: any = {
    tipo: '',
    texto: ''
  };

  constructor(
    private navegacion: NavegacionProvider,
    private service: EntregaProvider
  ) {}

  ngOnInit() {
    this.cedula = '';
    this.despachado = true;
    this.entregado = false;
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
    this.resultados = false;
    this.guardando = false;
    this.seleccionar = false;
    this.checkEntregado = undefined;
    this.cliente = {};
  }

  consultar() {
    const ci = this.cedula * 1;
    this.service.getEntregaByCID(
      {
        cedula_intper: ci
      }
    ).subscribe(resp => {
        const cliente = JSON.parse(resp['_body']);
        if (cliente.data.length > 0) {
          this.cliente = cliente.data[0];
          if (this.cliente.nombre_intest === 'Despachado') {
            this.despachado = true;
            this.entregado = false;
            this.guardando = false;
            this.seleccionar = false;
          } else if (this.cliente.nombre_intest === 'Entregado') {
            this.despachado = true;
            this.entregado = true;
            this.guardando = true;
            this.seleccionar = true;
          } else {
            this.despachado = false;
            this.entregado = false;
            this.guardando = true;
            this.seleccionar = true;
          }
          this.resultados = true;
        } else {
          this.cliente = {};
          this.resultados = false;
        }
        console.log('cliente', this.cliente);
    });
  }

  seleccion(e) {
    if (e.value === true) {
      this.checkEntregado = 1;
    } else if (e.value === false) {
      this.checkEntregado = 0;
    }
  }

  entregar() {
    if (this.checkEntregado === 1) {
      this.service.entregar(
        {
          id_intorden: this.cliente.id_intorden
        }
      ).subscribe(resp => {
        if (resp['_body'] === 'true') {
          this.alert.texto = '¡Entregado exitosamente!';
          this.alert.tipo = 'success';
          notify(this.alert.texto, this.alert.tipo, 6000);
        } else {
          this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
          this.alert.tipo = 'error';
          notify(this.alert.texto, this.alert.tipo, 6000);
        }
        this.ngOnInit();
      });
    }
  }

}
