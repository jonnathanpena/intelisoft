import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  templateUrl: 'consultar.component.html',
  styleUrls: ['consultar.component.css']
})

export class ConsultarComponent implements OnInit {
  cedula: any;

  constructor() {}

  ngOnInit() {
    this.cedula = '';
  }
}
