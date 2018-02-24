import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultarComponent } from './consultar/consultar.component';

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
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

