import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SueltoRestanteRoutes } from './sueltosRestantes.routing';
import { SueltosRestantesComponent } from './sueltosRestantes.component';
import { SueltosProviders } from './sueltos.providers';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SueltoRestanteRoutes),
    NgbModule
  ],
  providers: [
    SueltosProviders
  ],
  declarations: [SueltosRestantesComponent]
})

export class SueltosRestantesModule {}
