import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'punto-venta',
    loadChildren: './punto-venta/puntoVenta.module#PuntoVentaModule'
  },{
    path: 'cuenta-pichincha',
    loadChildren: './cuenta-pichincha/cuentaPichincha.module#CuentaPichinchaModule'
  },{
    path: 'envio-impresora',
    loadChildren: './envio-impresora/envioImpresora.module#EnvioImpresoraModule'
  },{
    path: 'envio-bones',
    loadChildren: './envio-bones/envioBones.module#EnvioBonesModule'
  },{
    path: 'data-cliente',
    loadChildren: './data-cliente/dataCliente.module#DataClienteModule'
  },{
    path:'data-precio',
    loadChildren: './data-precio/dataPrecio.module#DataPrecioModule'
  },{
    path:'despacho',
    loadChildren: './despacho/despacho.module#DespachoModule'
  },{
    path:'entrega',
    loadChildren: './entrega/entrega.module#EntregaModule'
  },{
    path: 'pendiente',
    loadChildren: './pendiente/pendiente.module#PendienteModule'
  },{
    path: 'sueltos-restantes',
    loadChildren: './sueltos-restantes/sueltosRestantes.module#SueltosRestantesModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

