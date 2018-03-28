import { Routes } from '@angular/router';

import { PendienteComponent } from './pendiente.component';

export const PendienteRoutes: Routes = [{
  path: '',
  component: PendienteComponent,
  data: {
    heading: 'Pendiente por Pagar',
    removeFooter: true
  }
}];
