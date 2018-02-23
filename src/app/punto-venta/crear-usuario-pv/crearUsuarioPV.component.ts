import { Component } from '@angular/core';

@Component({
  selector: 'app-crearUsuarioPV',
  templateUrl: './crearUsuarioPV.component.html',
  styleUrls: ['./crearUsuarioPV.component.scss']
})
export class CrearUsuarioComponent {
  myModel: string;
  modelWithValue: string;
  mask: Array<string | RegExp>;

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

  constructor() {
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.myModel = '';
    this.modelWithValue = '5554441234';
  }
 }