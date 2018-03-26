import { Component, OnInit } from '@angular/core';

import { DataPrecioProviders } from './dataPrecio.providers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dataPrecio',
  templateUrl: './dataPrecio.component.html',
  styleUrls: ['./dataPrecio.component.scss']
})
export class DataPrecioComponent implements OnInit {
  precios: any = [];
  opciones: any = [];
  opcion: any;

  constructor(
    private service: DataPrecioProviders
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
      console.log('precios', resp.data);
      this.precios = resp.data;
    });
  }

  getDia() {
    this.service.getToday().subscribe(resp => {
      this.precios = resp.data;
    });
  }

  getSemana() {
    this.service.getWeek().subscribe(resp => {
      this.precios = resp.data;
    });
  }

  getMes() {
    this.service.getMonth().subscribe(resp => {
      this.precios = resp.data;
    });
  }

  getAno() {
    this.service.getYear().subscribe(resp => {
      this.precios = resp.data;
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
