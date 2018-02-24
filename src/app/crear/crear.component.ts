import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.component.html',
  styleUrls: ['crear.component.css']
})

export class CrearComponent implements OnInit {
  cedula: any;

  constructor() {}

  ngOnInit() {
    this.cedula = '';
  }

  guardar(e) {
    e.preventDefault();
  }
}
