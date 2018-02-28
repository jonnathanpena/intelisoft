import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SueltoRestanteRoutes } from './sueltosRestantes.routing';
import { SueltosRestantesComponent } from './sueltosRestantes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SueltoRestanteRoutes)
  ],
  declarations: [SueltosRestantesComponent]
})

export class SueltosRestantesModule {}
