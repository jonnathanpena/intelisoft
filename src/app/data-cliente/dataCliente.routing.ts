import { Routes } from '@angular/router';

import { DataClienteComponent } from './dataCliente.component';

export const DataClientelRoutes: Routes = [{
  path: '',
  component: DataClienteComponent,
  data: {
    heading: 'Data Cliente',
    removeFooter: true
  }
}];
