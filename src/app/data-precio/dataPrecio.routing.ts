import { Routes } from '@angular/router';

import { DataPrecioComponent } from './dataPrecio.component';

export const DataPrecioRoutes: Routes = [{
  path: '',
  component: DataPrecioComponent,
  data: {
    heading: 'Data Precio',
    removeFooter: true
  }
}];
