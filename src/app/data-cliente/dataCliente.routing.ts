import { Routes } from '@angular/router';

import { dataClienteComponent } from './dataCliente.component';

export const DataClientelRoutes: Routes = [{
  path: '',
  component: dataClienteComponent,
  data: {
    heading: 'Data Cliente',
    removeFooter: true
  }
}];