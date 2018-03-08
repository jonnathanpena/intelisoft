import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { PuntoVentaProviders } from '../puntoVenta.providers';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-listarUsuarioPV',
  templateUrl: './listarUsuarioPV.component.html',
  styleUrls: ['./listarUsuarioPV.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  filiales: any = [];
  detalle: any = {};
  provincias: any = [];
  cantones: any = [];
  phonePattern: any;
  phoneRules: any;
  guardando: boolean;
  modalReference: any;

  constructor(
    private service: PuntoVentaProviders,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.service.getAllFiliales().subscribe(resp => {
      console.log('filiales', resp.data);
      this.filiales = resp.data;
    });
    this.service.getAllProvincias().subscribe(resp => {
      console.log('provincias', resp.data);
      this.provincias = resp.data;
    });
    this.phonePattern = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
    this.phoneRules = {
        X: /[02-9]/
    };
    this.guardando = false;
  }

  open(content, data) {
    this.detalle = data;
    console.log('detalle', this.detalle);
    this.detalle.id_intcant = this.detalle.canton_per_id;
    const idprovincia = this.detalle.id_intprov * 1;
    this.getCantones(idprovincia);
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      console.log('closed', 'Closed with: ' + result);
    }, (reason) => {
      console.log('Dismissed', `Dismissed ' +  ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getCantones(provincia) {
    this.service.getCantonesPorProvincia({prov_canton_id: provincia}).subscribe(resp => {
      const cant = JSON.parse(resp['_body']);
      console.log('cantones', cant.data);
      this.cantones = cant.data;
    });
  }

  cambioProvincia(e) {
    const id = e.value * 1;
    this.getCantones(id);
  }

  cambioCanton(e) {
    const id = e.value * 1;
    this.detalle.canton_per_id = id;
  }

  modificar(e) {
    e.preventDefault();
    console.log('a modificar', this.detalle);
    this.guardando = true;
    this.service.updatePersona(this.detalle).subscribe(resp => {
      if (resp['_body'] === 'true') {
        this.modificarFilial();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
        this.guardando = false;
        this.modalReference.close();
      }
      this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    });
  }

  modificarFilial() {
    this.service.updateFilial(this.detalle).subscribe(resp => {
      if (resp['_body'] === 'true') {
        this.modificarUsuario();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
        this.guardando = false;
        this.modalReference.close();
      }
    });
  }

  modificarUsuario() {
    this.service.updateUsuario(this.detalle).subscribe(resp => {
      this.guardando = false;
      if (resp['_body'] === 'true') {
        console.log('modificar usuario', resp['_body']);
        this.modalReference.close();
        this.alerts.push({
          id: 1,
          type: 'success',
          message: '¡Punto de Venta agregado exitosamente!'
        });
        this.ngOnInit();
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: '¡Ooops! Algo ocurrió mal'
        });
        this.modalReference.close();
      }
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

