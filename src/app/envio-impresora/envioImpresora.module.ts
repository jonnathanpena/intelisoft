import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EnvioImpresoraRoutes } from './envioImpresora.routing';
import { GrabadoraComponent } from './grabadora/grabadora.component';
import { ImpresoraComponent } from './impresora/impresora.component';
import { ZebraComponent } from './zebra/zebra.component';

import { EnvioImpresoraProviders } from './envioImpresora.providers';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnvioImpresoraRoutes),
    NgbModule
  ],
  declarations: [GrabadoraComponent, ImpresoraComponent, ZebraComponent],
  providers: [
    EnvioImpresoraProviders
  ]
})

export class EnvioImpresoraModule {}
