import { Component, OnInit, Input } from '@angular/core';

import { CuentaPichinchaProviders } from '../cuentaPichincha.providers';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-formularioPago',
  templateUrl: './formularioPago.component.html',
  styleUrls: ['./formularioPago.component.scss']
})
export class FormularioPagoComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  guardando: boolean;
  pago: any = {};

  constructor(
    private service: CuentaPichinchaProviders
  ) {}

  ngOnInit() {
    this.pago = {
      cedula_intpago: '',
      num_transferencia_intpag: '',
      monto_intpag: '',
      ord_pago_id: ''
    };
    this.guardando = false;
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  guardar(e) {
    e.preventDefault();
    this.guardando = true;
    this.consultarOrden();
  }

  consultarOrden() {
    this.service.getOrdenById(
      {
        id_intorden: this.pago.ord_pago_id
      }
    ).subscribe(resp => {
      const orden = JSON.parse(resp['_body']);
      const total = orden.data[0].total_intdetord;
      const paga = this.pago.monto_intpag * 1;
      const resta = paga - total;
      if (resta >= -1) {
        if (orden.data.length > 0) {
          switch (orden.data[0].estatus_intord_id) {
            case 1:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden apenas ha sido tomada, no se ha realizado el pedido por completo!'
              });
              this.guardando = false;
              break;

            case 2:
              this.insertar();
              break;

            case 3:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden ya ha sido pagada!'
              });
              this.guardando = false;
              break;

            case 4:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden ha sido cancelada!'
              });
              this.guardando = false;
              break;

            case 5:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden ha sido anulada!'
              });
              this.guardando = false;
              break;

            case 6:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden ha sido despachada!'
              });
              this.guardando = false;
              break;

            case 7:
              this.alerts.push({
                id: 2,
                type: 'warning',
                message: '¡Esta orden ha sido entregada!'
              });
              this.guardando = false;
              break;
          }
        } else {
          this.alerts.push({
            id: 2,
            type: 'warning',
            message: '¡No existe este número de orden, por favor, intente con otro!'
          });
          this.guardando = false;
        }
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Saldo insuficiente para cancelar $' + orden.data[0].total_intdetord + '!'
        });
        this.guardando = false;
      }
    });
  }

  insertar() {
    this.service.insert(this.pago).subscribe(resp => {
      if (resp['_body'] === 'true') {
        this.modificarEstatusPedido();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
        this.guardando = false;
      }
      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    });
  }

  modificarEstatusPedido() {
    this.service.updateEstatusOrden(
      {
        estatus_intord_id: 3,
        id_intorden: this.pago.ord_pago_id
      }
    ).subscribe(resp => {
      if (resp['_body'] === 'true') {
        this.insertLogOrden();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
        this.guardando = false;
      }
      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    });
  }

  insertLogOrden() {
    this.service.insertLogEstatusOrden(
      {
        orden_intlogs_ord: this.pago.ord_pago_id,
        estatus_intlogs_ord: 3,
        usuario_intlogs_ord: 3
      }
    ).subscribe(resp => {
      this.guardando = false;
      if (resp['_body'] === 'true') {
        this.alerts.push({
          id: 1,
          type: 'success',
          message: '¡Pago agregado exitosamente!'
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

  cancelar() {
    this.ngOnInit();
  }
}
