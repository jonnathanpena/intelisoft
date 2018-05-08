import { Routes } from '@angular/router';

import { DespachoComponent } from './despacho.component';

export const DespachoRoutes: Routes = [{
  path: '',
  component: DespachoComponent,
  data: {
    heading: 'Despacho a Punto de Venta',
    removeFooter: true
  }
}];
