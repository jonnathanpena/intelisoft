import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CuentaPichinchaRoutes } from './cuentaPichincha.routing';
import { FormularioPagoComponent } from './formulario-pago/formularioPago.component';
import { ListarPagosComponent } from './listar-pagos/listarPagos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CuentaPichinchaRoutes)
  ],
  declarations: [FormularioPagoComponent, ListarPagosComponent]
})

export class CuentaPichinchaModule {}
