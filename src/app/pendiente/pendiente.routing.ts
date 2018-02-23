import { Routes } from '@angular/router';

import { pendienteComponent } from './pendiente.component';

export const PendienteRoutes: Routes = [{
  path: '',
  component: pendienteComponent,
  data: {
    heading: 'Pendiente por Pagar',
    removeFooter: true
  }
}];