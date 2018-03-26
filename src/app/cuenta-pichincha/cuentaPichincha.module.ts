import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CuentaPichinchaRoutes } from './cuentaPichincha.routing';
import { FormularioPagoComponent } from './formulario-pago/formularioPago.component';
import { ListarPagosComponent } from './listar-pagos/listarPagos.component';
import { CuentaPichinchaProviders } from './cuentaPichincha.providers';

import {  DxTextBoxModule,
  DxValidatorModule,
  DxButtonModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    DxTextBoxModule,
    DxValidatorModule,
    DxButtonModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(CuentaPichinchaRoutes)
  ],
  declarations: [FormularioPagoComponent, ListarPagosComponent],
  providers: [
    CuentaPichinchaProviders
  ]
})

export class CuentaPichinchaModule {}
