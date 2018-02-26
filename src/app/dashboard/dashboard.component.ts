import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { NavegacionProvider } from '../providers/navegacion.provider';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cedula: any;

  constructor(
    public navegacion: NavegacionProvider
  ) {}

  ngOnInit() {
    this.cedula = '';
  }
}
