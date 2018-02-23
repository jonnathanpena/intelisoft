import { Routes } from '@angular/router';

import { cerrarSesionComponent } from './cerrarSesion.component';

export const CerrarSesionRoutes: Routes = [{
  path: '',
  component: cerrarSesionComponent,
  data: {
    heading: '',
    removeFooter: true
  }
}];