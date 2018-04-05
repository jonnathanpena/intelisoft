import { Component, OnInit, Input } from '@angular/core';
import { EnvioImpresoraProviders } from '../envioImpresora.providers';
import { DatePipe } from '@angular/common';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-grabadora',
  templateUrl: './grabadora.component.html',
  styleUrls: ['./grabadora.component.scss']
})
export class GrabadoraComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  guardando: boolean;
  pedidos: any = [];
  opciones: any = [];
  opcion: any;

  constructor(
    private service: EnvioImpresoraProviders
  ) {}

  ngOnInit() {
    this.pedidos = [];
    this.service.getAllGrabadora().subscribe(resp => {
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
    if (this.pedidos[index].procesado_imp_detimp === 0) {
      this.pedidos[index].procesado_imp_detimp = 1;
    } else {
      this.pedidos[index].procesado_imp_detimp = 0;
    }
  }

  getDia() {
    this.service.getGrabadoraToday().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getSemana() {
    this.service.getGrabadoraWeek().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getMes() {
    this.service.getGrabadoraMonth().subscribe(resp => {
      this.pedidos = resp.data;
    });
  }

  getAno() {
    this.service.getGrabadoraYear().subscribe(resp => {
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
      this.service.updateImpresora(this.pedidos[i]).subscribe(resp => {
        if (resp['_body'] === 'false') {
          this.alerts.push({
            id: 0,
            type: 'warning',
            message: '¡Ooops! Algo ocurrió mal'
          });
          guardo = 0;
        }
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

}
