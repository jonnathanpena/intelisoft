import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { PuntoVentaProviders } from '../puntoVenta.providers';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-precioArete',
  templateUrl: './precioArete.component.html',
  styleUrls: ['./precioArete.component.scss']
})
export class PrecioAreteComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;

  precios: any = [];
  nuevo: any = {};
  guardando: boolean;

  constructor(
    private service: PuntoVentaProviders
  ) {}

  ngOnInit() {
    this.service.getAllPrecios().subscribe(resp => {
      console.log('precios', resp.data);
      this.precios = resp.data;
    });
    this.nuevo = {
      precio_intpre: '',
      usu_pre_id: 2
    };
    this.guardando = false;
  }

  guardar(e) {
    e.preventDefault();
    console.log('a guardar', this.nuevo);
    this.guardando = true;
    this.service.insertPrecio(this.nuevo).subscribe(resp => {
      this.guardando = false;
      if (resp['_body'] === 'true') {
        this.alerts.push({
          id: 1,
          type: 'success',
          message: '¡Precio agregado exitosamente!'
        });
        this.ngOnInit();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
      }
      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }
}
