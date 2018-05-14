import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { CrearComponent } from './crear/crear.component';
import { OrdenComponent } from './orden/orden.component';
import { EntregaComponent } from './entrega/entrega.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'consultar',
        component: ConsultarComponent
      }, {
        path: 'crear',
        component: CrearComponent
      }, {
        path: 'orden',
        component: OrdenComponent
      }, {
        path: 'entrega',
        component: EntregaComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

