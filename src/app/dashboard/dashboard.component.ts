import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { NavegacionProvider } from '../providers/navegacion.provider';
import { UsuarioProvider } from '../providers/usuario.providers';
import { DashboardProvider } from './dashboard.providers';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cedula: any;
  ipaddress: any = {};

  constructor(
    public navegacion: NavegacionProvider,
    public usuario: UsuarioProvider,
    private service: DashboardProvider,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.geIP().subscribe(resp => {
      this.ipaddress = resp;
      this.service.getLogLogin(
        {
          usu_log_id: this.usuario.usuario.id_intusuario,
          ip_intlog: this.ipaddress.query,
          lat_intlog: this.ipaddress.lat,
          lon_intlog: this.ipaddress.lon
        }
      ).subscribe(res => {
        const getLog = JSON.parse(res['_body']);
        console.log('get log login', getLog);
        if (getLog.data.length < 1) {
          this.service.insertIP({
            usu_log_id: this.usuario.usuario.id_intusuario,
            ip_intlog: this.ipaddress.query,
            ciudad_intlog: this.ipaddress.city,
            pais_intlog: this.ipaddress.country,
            isp_intlog: this.ipaddress.isp,
            lat_intlog: this.ipaddress.lat,
            lon_intlog: this.ipaddress.lon,
            region_intlog: this.ipaddress.regionName,
            timezone_intlog: this.ipaddress.timezone
          }).subscribe(r => {
            console.log('insert log login', r);
          });
        }
      });
    });
  }

  close() {
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
  }

  registrarCliente() {
    this.router.navigate(['/dashboard/crear']);
  }
}
