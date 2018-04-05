import { Component, OnInit, Input } from '@angular/core';
import { EnvioBonesProviders } from './envioBones.providers';
import { DatePipe } from '@angular/common';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-bones',
  templateUrl: './envioBones.component.html',
  styleUrls: ['./envioBones.component.scss']
})

export class BonesComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  guardando: boolean;
  pedidos: any = [];
  opciones: any = [];
  opcion: any;

  constructor(
    private service: EnvioBonesProviders
  ) {}

  ngOnInit() {
    this.pedidos = [];
    this.service.getAllBones().subscribe(resp => {
      this.pedidos = resp.data;
    });
    this.opciones = [
      'Seleccione una consulta',
      'Día',
      'Semana',
      'Mes actual',
      'Año'
    ];
    this.guardando = false;
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  cambiarEstatus(pedido) {
    const index = this.pedidos.indexOf(pedido);
    if (this.pedidos[index].procesado_bones_detimp === 0) {
      this.pedidos[index].procesado_bones_detimp = 1;
    } else {
      this.pedidos[index].procesado_bones_detimp = 0;
    }
  }

  getDia() {
    this.service.getBonesToday().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getSemana() {
    this.service.getBonesWeek().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getMes() {
    this.service.getBonesMonth().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getAno() {
    this.service.getBonesYear().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  selecciono(e) {
    this.pedidos = [];
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

  guardar() {
    this.guardando = true;
    let guardo = 1;
    for (let i = 0; i < this.pedidos.length; i++) {
      this.service.updateBones(this.pedidos[i]).subscribe(resp => {
        if (resp['_body'] === 'false') {
          this.alerts.push({
            id: 0,
            type: 'warning',
            message: '¡Ooops! Algo ocurrió mal'
          });
          guardo = 0;
        }
        this.updateEstatusOrden(this.pedidos[i]);
        this.insertLogEstatus(this.pedidos[i]);
        this.updateDespacho(this.pedidos[i]);
      });
    }
    if (guardo === 1) {
      this.alerts.push({
        id: 1,
        type: 'success',
        message: '¡Procesado exitosamente!'
      });
    }
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    this.ngOnInit();
  }

  updateEstatusOrden(orden) {
    this.service.updateEstatusOrden(
      {
        estatus_intord_id: 6,
        id_intorden: orden.ord_detimp_id
      }
    ).subscribe(resp => {
      if (resp['_body'] === 'false') {
        this.alerts.push({
          id: 0,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
      }
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  insertLogEstatus(orden) {
    this.service.insertLogEstatusOrden(
      {
        orden_intlogs_ord: orden,
        estatus_intlogs_ord: 6,
        usuario_intlogs_ord: 2
      }
    ).subscribe(resp => {
      if (resp['_body'] === 'false') {
        this.alerts.push({
          id: 0,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
      }
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  updateDespacho(orden) {
    this.service.updateDespacho(
      {
        ord_detsif_id: orden.ord_detimp_id
      }
    ).subscribe(resp => {
      if (resp['_body'] === 'false') {
        this.alerts.push({
          id: 0,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
      }
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

}
