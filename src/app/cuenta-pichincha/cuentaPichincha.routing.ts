import { Routes } from '@angular/router';

import { FormularioPagoComponent } from './formulario-pago/formularioPago.component';
import { ListarPagosComponent } from './listar-pagos/listarPagos.component';

export const CuentaPichinchaRoutes: Routes = [
  {
    path: '',
    children: [{
       path: 'formulario-pago',
       component: FormularioPagoComponent,
       data: {
         heading: 'Formulario de Pago Pichincha'
       }
    },{
        path: 'listar-pagos',
        component: ListarPagosComponent,
        data: {
            heading: 'Lista de Pagos'
        }
    }]
  }
];
