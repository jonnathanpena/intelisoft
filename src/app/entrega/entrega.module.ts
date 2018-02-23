import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EntregaRoutes } from './entrega.routing';
import { entregaComponent } from './entrega.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EntregaRoutes)
  ],
  declarations: [entregaComponent]
})

export class EntregaModule {}
