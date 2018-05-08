import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EntregaRoutes } from './entrega.routing';
import { EntregaComponent } from './entrega.component';
import { EntregaProviders } from './entrega.providers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EntregaRoutes)
  ],
  providers: [
    EntregaProviders
  ],
  declarations: [EntregaComponent]
})

export class EntregaModule {}
