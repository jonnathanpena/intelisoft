import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EnvioImpresoraRoutes } from './envioImpresora.routing';
import { GrabadoraComponent } from './grabadora/grabadora.component';
import { ImpresoraComponent } from './impresora/impresora.component';
import { ZebraComponent } from './zebra/zebra.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnvioImpresoraRoutes)
  ],
  declarations: [GrabadoraComponent, ImpresoraComponent, ZebraComponent]
})

export class EnvioImpresoraModule {}
