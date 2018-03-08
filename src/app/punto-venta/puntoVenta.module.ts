import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PuntoVentaRoutes } from './puntoVenta.routing';
import { CrearUsuarioComponent } from './crear-usuario-pv/crearUsuarioPV.component';
import { ListarUsuarioComponent } from './listar-usuario-pv/listarUsuarioPV.component';
import { PrecioAreteComponent } from './precio-arete/precioArete.component';
import { ControlPVComponent } from './control-pv/controlPV.component';
import { PuntoVentaProviders } from './puntoVenta.providers';

import {  DxTextBoxModule,
          DxValidatorModule,
          DxSelectBoxModule,
          DxButtonModule
        } from 'devextreme-angular';

@NgModule({
  imports: [
    DxTextBoxModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxButtonModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(PuntoVentaRoutes)
  ],
  declarations: [CrearUsuarioComponent, ListarUsuarioComponent, PrecioAreteComponent, ControlPVComponent],
  providers: [
    PuntoVentaProviders
  ]
})

export class PuntoVentaModule {}
