import { Routes } from '@angular/router';

import { entregaComponent } from './entrega.component';

export const EntregaRoutes: Routes = [{
  path: '',
  component: entregaComponent,
  data: {
    heading: 'Entrega en Punto de Venta',
    removeFooter: true
  }
}];