import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  login: any = {};
  entrando: boolean;

  constructor() {}

  ngOnInit() {
    this.login = {
      usuario: '',
      clave: ''
    };
    this.entrando = false;
  }

  entrar(e) {
    e.preventDefault();
  }
}


