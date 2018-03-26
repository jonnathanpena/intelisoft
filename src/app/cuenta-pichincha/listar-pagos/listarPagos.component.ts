import { Component, OnInit } from '@angular/core';

import { CuentaPichinchaProviders } from '../cuentaPichincha.providers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listarPagos',
  templateUrl: './listarPagos.component.html',
  styleUrls: ['./listarPagos.component.scss']
})
export class ListarPagosComponent implements OnInit  {
  opciones: any = [];
  opcion: any;
  pagos: any = [];

  constructor(
    private service: CuentaPichinchaProviders
  ) {}

  ngOnInit() {
    this.opciones = [
      'Seleccione una consulta',
      'Día',
      'Semana',
      'Mes actual',
      'Año'
    ];
    this.service.getAll().subscribe(resp => {
      this.pagos = resp.data;
    });
  }

  getDia() {
    this.service.getToday().subscribe(resp => {
      this.pagos = resp.data;
    });
  }

  getSemana() {
    this.service.getWeek().subscribe(resp => {
      this.pagos = resp.data;
    });
  }

  getMes() {
    this.service.getMonth().subscribe(resp => {
      this.pagos = resp.data;
    });
  }

  getAno() {
    this.service.getYear().subscribe(resp => {
      this.pagos = resp.data;
    });
  }

  selecciono(e) {
    switch (e.target.value) {
      case 'Seleccione una consulta':
        this.ngOnInit();
        break;

      case 'Día':
        this.getDia();
        break;

      case 'Semana':
        this.getSemana();
        break;

      case 'Mes actual':
        this.getMes();
        break;

      case 'Año':
        this.getAno();
        break;
    }
  }
}
