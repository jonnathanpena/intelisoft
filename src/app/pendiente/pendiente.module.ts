import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PendienteRoutes } from './pendiente.routing';
import { pendienteComponent } from './pendiente.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PendienteRoutes)
  ],
  declarations: [pendienteComponent]
})

export class PendienteModule {}
