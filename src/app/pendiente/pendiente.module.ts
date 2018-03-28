import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PendienteRoutes } from './pendiente.routing';
import { PendienteComponent } from './pendiente.component';
import { PendienteProviders } from './pendiente.providers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PendienteRoutes)
  ],
  declarations: [PendienteComponent],
  providers: [
    PendienteProviders
  ]
})

export class PendienteModule {}
