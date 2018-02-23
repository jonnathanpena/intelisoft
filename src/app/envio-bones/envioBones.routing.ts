import { Routes } from '@angular/router';

import { BonesComponent } from './envioBones.component';

export const EnvioBoneslRoutes: Routes = [{
  path: '',
  component: BonesComponent,
  data: {
    heading: 'Sistema Contable BONES',
    removeFooter: true
  }
}];