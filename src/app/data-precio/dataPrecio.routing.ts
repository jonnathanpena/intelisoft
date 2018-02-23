import { Routes } from '@angular/router';

import { dataPrecioComponent } from './dataPrecio.component';

export const DataPrecioRoutes: Routes = [{
  path: '',
  component: dataPrecioComponent,
  data: {
    heading: 'Data Precio',
    removeFooter: true
  }
}];