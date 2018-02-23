import { Routes } from '@angular/router';

import { GrabadoraComponent } from './grabadora/grabadora.component';
import { ImpresoraComponent } from './impresora/impresora.component';
import { ZebraComponent } from './zebra/zebra.component';

export const EnvioImpresoraRoutes: Routes = [
  {
     path: '',
     children: [{
        path: 'grabadora',
        component: GrabadoraComponent,
        data: {
          heading: 'Lista Impresora Grabadora'
        }
     },{
         path: 'impresora',
         component: ImpresoraComponent,
         data: {
             heading: 'Lista Impresora'
         }
    }, {
        path: 'zebra',
        component: ZebraComponent,
        data: {
            heading: 'Lista Impresora Zebra'
        }
    }]
  }
];
