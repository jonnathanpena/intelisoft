import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LoginProvider } from './login.providers';
import { UsuarioProvider } from '../providers/usuario.providers';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  login: any = {};
  entrando: boolean;
  alerts: any = [];
  dismissible = true;
  filiales: any = [];
  detalles: any = {};

  constructor(
    private router: Router,
    private service: LoginProvider,
    private usuario: UsuarioProvider,
    private modalService: BsModalService) {}

  ngOnInit() {
    this.login = {
      usuario_intusu: '',
      clave: ''
    };
    this.entrando = false;
    this.service.getAllFiliales().subscribe(resp => {
      this.filiales = [];
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].tipo_usuario_intusu === 'PV' && resp.data[i].activo === '1') {
          this.filiales.push(resp.data[i]);
        }
      }
    });
  }

  entrar(e) {
    e.preventDefault();
    this.service.entrar(this.login).subscribe(resp => {
      const respuesta = JSON.parse(resp['_body']);
      console.log('entrar', resp['_body']);
      if (respuesta.data.length > 0) {
        if (respuesta.data[0].clave_intusu === this.login.clave) {
          this.usuario.setUsuario(respuesta.data[0]);
          this.router.navigate(['/dashboard/consultar']);
        } else {
          this.alerts.push(
            {
              type: 'danger',
              msg: 'Las claves no coinciden'
            }
          );
        }
      } else {
        this.alerts.push(
          {
            type: 'warning',
            msg: '¡Usuario no registrado, contacte al proveedor del sistema!'
          }
        );
      }
    });
  }

  openModal(template: TemplateRef<any>, filial: any) {
    this.modalRef = this.modalService.show(template);
    this.detalles = filial;
  }
}

