import { Component, OnInit } from '@angular/core';
import { PuntoVentaProviders } from '../puntoVenta.providers';

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-crearUsuarioPV',
  templateUrl: './crearUsuarioPV.component.html',
  styleUrls: ['./crearUsuarioPV.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  myModel: string;
  modelWithValue: string;
  mask: Array<string | RegExp>;
  provincias: any [];
  cantones: any = [];
  nuevo: any = {};
  phonePattern: any;
  phoneRules: any;

  choices = [{
    id: 'telefono-pv',
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholder: '(555) 495-3947'
  }, {
    id: 'telefonoOficina-pv',
    mask: ['+', '593', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholder: '+593 (555) 495-3947'
  }, {
    name: 'Date',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    placeholder: '25/09/1970'
  }, {
    name: 'Email',
    placeholder: 'john@smith.com',
  }];

  guardando: boolean;

  constructor(
    private service: PuntoVentaProviders
  ) {
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.myModel = '';
    this.modelWithValue = '5554441234';
  }

  ngOnInit() {
    this.nuevo = {
      nombre_intper: '',
      apellido_intper: '',
      cedula_intper: '',
      canton_per_id: '',
      parroquia_intper: '',
      direccion_intper: '',
      telefono_intper: '',
      correo_intper: '',
      nombre_intemp: '',
      usu_emp_id: '',
      comision_intemp: '',
      per_usu_id: '',
      usuario_intusu: '',
      clave_intusu: '',
      tipo_usuario_intusu: 'PV',
      activo: 1
    };
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

  cancelar() {}

  guardar(e) {
    e.preventDefault();
    console.log('a guardar', this.nuevo);
    this.service.insertPersonas(this.nuevo).subscribe(resp => {
      console.log('insert persona', resp['_body']);
      this.guardarUsuario(resp['_body']);
    });
  }

  guardarUsuario(persona) {
    const caracteres = 'abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789';
    let contraseña = '';
    for (let i = 0; i < 9; i++) {
      contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    this.nuevo.clave_intusu = contraseña;
    this.nuevo.per_usu_id = persona;
    console.log('usuario a guardar', this.nuevo);
    this.service.insertUsuario(this.nuevo).subscribe(resp => {
      console.log('insert usuario', resp['_body']);
      this.guardarFilial(resp['_body']);
    });
  }

  guardarFilial(usuario) {
    this.nuevo.usu_emp_id = usuario;
    console.log('filial guardar', this.nuevo);
    this.service.insertFilial(this.nuevo).subscribe(resp => {
      console.log('insert filial', resp['_body']);
      if (resp['_body'] === 'true') {
        console.log('guardado exitoso');
        this.ngOnInit();
      } else {
        console.log('guardado fallido');
      }
    });
  }

  cambioProvincia(e) {
    const valor = e.value * 1;
    this.service.getCantonesPorProvincia({prov_canton_id: valor}).subscribe(resp => {
      const cant = JSON.parse(resp['_body']);
      console.log('cantones', cant.data);
      this.cantones = cant.data;
    });
  }

  cambioCanton(e) {
    this.nuevo.canton_per_id = e.value * 1;
  }
 }

