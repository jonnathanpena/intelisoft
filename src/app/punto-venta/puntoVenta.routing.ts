import { Routes } from '@angular/router';

import { CrearUsuarioComponent } from './crear-usuario-pv/crearUsuarioPV.component';
import { ListarUsuarioComponent } from  './listar-usuario-pv/listarUsuarioPV.component';
import { PrecioAreteComponent } from './precio-arete/precioArete.component';
import { ControlPVComponent } from './control-pv/controlPV.component';

export const PuntoVentaRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'crear-usuario-pv',
      component: CrearUsuarioComponent,
      data: {
        heading: 'Crear Usuario'
      }
    },{
      path: 'listar-usuario-pv',
      component: ListarUsuarioComponent,
      data: {
        heading: 'Listar Usuario'
      }
    }, {
      path: 'precio-arete',
      component: PrecioAreteComponent,
      data: {
        heading: 'Precio de Arete'
      },
    },{
      path: 'control-pv',
      component: ControlPVComponent,
      data: {
        heading: 'Control de Punto de Venta'
      }
    }]
  }
];
