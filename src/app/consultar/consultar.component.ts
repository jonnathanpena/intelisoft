import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { NavegacionProvider } from './../providers/navegacion.provider';
import { ConsultarProvider } from './consultar.providers';
import { ClienteProvider } from './../providers/cliente.providers';

@Component({
  selector: 'app-consultar',
  templateUrl: 'consultar.component.html',
  styleUrls: ['consultar.component.css']
})

export class ConsultarComponent implements OnInit {
  cedula: any = '12345';

  constructor(
    private navegacion: NavegacionProvider,
    private service: ConsultarProvider,
    private router: Router,
    private cliente: ClienteProvider) {}

  ngOnInit() {
    this.cedula = '';
  }

  consultar(e) {
    e.preventDefault();
    console.log('cedula', this.cedula);
    this.service.getClienteByCi({ci: this.cedula}).subscribe(resp => {
      const cliente = JSON.parse(resp['_body']);
      console.log('get cliente by ci', cliente.data);
      if (cliente.data.length > 0) {
        this.cliente.setCliente(cliente.data[0]);
        this.router.navigate(['/dashboard/orden']);
      } else {
        this.navegacion.setColumnas({
          izquierda: true,
          derecha: 'col-lg-7 col-md-7 col-sm-8 col-xs-12'
        });
      }
    });
  }
}
