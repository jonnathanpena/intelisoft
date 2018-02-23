import { Routes } from '@angular/router';

import { despachoComponent } from './despacho.component';

export const DespachoRoutes: Routes = [{
  path: '',
  component: despachoComponent,
  data: {
    heading: 'Despacho a Punto de Venta',
    removeFooter: true
  }
}];