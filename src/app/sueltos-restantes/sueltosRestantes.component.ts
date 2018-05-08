import { Component, OnInit, Input } from '@angular/core';
import { SueltosProviders } from './sueltos.providers';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-sueltos',
  templateUrl: './sueltosRestantes.component.html',
  styleUrls: ['./sueltosRestantes.component.scss']
})
export class SueltosRestantesComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  sueltos: any = [];
  suma: any = 0;
  guardando: boolean;

  constructor(private service: SueltosProviders) {}

  ngOnInit() {
    this.service.getAll().subscribe( resp => {
      this.sueltos = resp.data;
      let total = 0;
      for (let i = 0; i < resp.data.length; i++) {
        total += resp.data[i].sueltos_intsue;
      }
      this.suma = total;
    });
    this.guardando = false;
  }

  cambiarEstatus(suelto) {
    const index = this.sueltos.indexOf(suelto);
    if (this.sueltos[index].estatus_intsue === 0) {
      this.sueltos[index].estatus_intsue = 1;
    } else {
      this.sueltos[index].estatus_intsue = 0;
    }
  }

  guardar() {
    let guardado = 1;
    this.guardando = true;
    for (let i = 0; i < this.sueltos.length; i++) {
      if (this.sueltos[i].estatus_intsue === 0) {
        this.service.delete(
          {
            id_intsue: this.sueltos[i].id_intsue
          }
        ).subscribe(resp => {
          if (resp['_body'] === 'false') {
            guardado = 0;
            this.alerts.push({
              id: 0,
              type: 'warning',
              message: '¡Ooops! Algo ocurrió mal'
            });
          }
        });
      }
    }
    if (guardado === 1) {
      this.alerts.push({
        id: 1,
        type: 'success',
        message: '¡Procesado exitosamente!'
      });
    }
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    this.ngOnInit();
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
