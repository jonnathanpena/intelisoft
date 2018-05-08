import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DespachoRoutes } from './despacho.routing';
import { DespachoComponent } from './despacho.component';
import { DespachoProviders } from './despacho.providers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DespachoRoutes)
  ],
  providers: [
    DespachoProviders
  ],
  declarations: [
    DespachoComponent
  ]
})

export class DespachoModule {}
