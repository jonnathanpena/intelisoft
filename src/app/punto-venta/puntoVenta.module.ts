import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PuntoVentaRoutes } from './puntoVenta.routing';
import { CrearUsuarioComponent } from './crear-usuario-pv/crearUsuarioPV.component';
import { ListarUsuarioComponent } from './listar-usuario-pv/listarUsuarioPV.component';
import { PrecioAreteComponent } from './precio-arete/precioArete.component';
import { ControlPVComponent } from './control-pv/controlPV.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PuntoVentaRoutes)
  ],
  declarations: [CrearUsuarioComponent, ListarUsuarioComponent, PrecioAreteComponent, ControlPVComponent]
})

export class PuntoVentaModule {}
