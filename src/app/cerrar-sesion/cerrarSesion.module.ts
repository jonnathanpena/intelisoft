import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CerrarSesionRoutes } from './cerrarSesion.routing';
import { cerrarSesionComponent } from './cerrarSesion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CerrarSesionRoutes)
  ],
  declarations: [cerrarSesionComponent]
})

export class CerrarSesionModule {}
