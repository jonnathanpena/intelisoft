import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { NavegacionProvider } from './../providers/navegacion.provider';

@Component({
  selector: 'app-orden',
  templateUrl: 'orden.component.html',
  styleUrls: ['orden.component.css']
})

export class OrdenComponent implements OnInit {
  guardando: boolean;

  constructor(
    private router: Router,
    private navegacion: NavegacionProvider) {}

  ngOnInit() {
    this.guardando = true;
    this.navegacion.setColumnas({
      izquierda: true,
      derecha: 'col-lg-7 col-md-7 col-sm-8 col-xs-12'
    });
  }

  guardar(e) {
    e.preventDefault();
  }

  cancelar() {
    console.log('cancelar');
  }
}

