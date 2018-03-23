import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

import { LoginProvider } from './login.providers';
import { UsuarioProvider } from '../providers/usuario.providers';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  login: any = {};
  entrando: boolean;
  alerts: any = [];
  dismissible = true;

  constructor(
    private router: Router,
    private service: LoginProvider,
    private usuario: UsuarioProvider) {}

  ngOnInit() {
    this.login = {
      usuario_intusu: '',
      clave: ''
    };
    this.entrando = false;
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
}

