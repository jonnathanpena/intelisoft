import { Routes } from '@angular/router';

import { EntregaComponent } from './entrega.component';

export const EntregaRoutes: Routes = [{
  path: '',
  component: EntregaComponent,
  data: {
    heading: 'Entrega en Punto de Venta',
    removeFooter: true
  }
}];