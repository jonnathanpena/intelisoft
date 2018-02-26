import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { NavegacionProvider } from './../providers/navegacion.provider';

@Component({
  selector: 'app-entrega',
  templateUrl: 'entrega.component.html',
  styleUrls: ['entrega.component.css']
})

export class EntregaComponent implements OnInit {
  cedula: any;
  despachado: boolean;
  entregado: boolean;

  constructor(private navegacion: NavegacionProvider) {}

  ngOnInit() {
    this.cedula = '';
    this.despachado = true;
    this.entregado = false;
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
  }
}
