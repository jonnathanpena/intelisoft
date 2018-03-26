import { Component, OnInit } from '@angular/core';

import { PuntoVentaProviders } from '../puntoVenta.providers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-controlPV',
  templateUrl: './controlPV.component.html',
  styleUrls: ['./controlPV.component.scss']
})
export class ControlPVComponent implements OnInit {
  logs: any = [];
  opciones: any = [];
  opcion: any;

  constructor(
    private service: PuntoVentaProviders
  ) {}

  ngOnInit() {
    this.service.getAllLogs().subscribe(resp => {
     this.logs = resp.data;
    });
    this.opciones = [
      'Seleccione una consulta',
      'Día',
      'Semana',
      'Mes actual',
      'Año'
    ];
  }

  getDia() {
    this.service.getLogsToday().subscribe(resp => {
      this.logs = resp.data;
    });
  }

  getSemana() {
    this.service.getLogsWeek().subscribe(resp => {
      this.logs = resp.data;
    });
  }

  getMes() {
    this.service.getLogsMonth().subscribe(resp => {
      this.logs = resp. data;
    });
  }

  getAno() {
    this.service.getLogsYear().subscribe(resp => {
      this.logs = resp.data;
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
