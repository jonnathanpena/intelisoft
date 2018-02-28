import { Routes } from '@angular/router';

import { SueltosRestantesComponent} from './sueltosRestantes.component';

export const SueltoRestanteRoutes: Routes = [{
  path: '',
  component: SueltosRestantesComponent,
  data: {
    heading: 'Sueltos Restantes'
  }
}];
