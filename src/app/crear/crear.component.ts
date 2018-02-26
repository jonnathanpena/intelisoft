import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { NavegacionProvider } from './../providers/navegacion.provider';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.component.html',
  styleUrls: ['crear.component.css']
})

export class CrearComponent implements OnInit {
  cedula: any;

  constructor(private navegacion: NavegacionProvider) {}

  ngOnInit() {
    this.cedula = '';
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
  }

  guardar(e) {
    e.preventDefault();
  }

  cancelar() {
    console.log('cancelar');
  }
}
