import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DespachoRoutes } from './despacho.routing';
import { despachoComponent } from './despacho.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DespachoRoutes)
  ],
  declarations: [despachoComponent]
})

export class DespachoModule {}
