import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataClientelRoutes } from './dataCliente.routing';
import { dataClienteComponent } from './dataCliente.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataClientelRoutes)
  ],
  declarations: [dataClienteComponent]
})

export class DataClienteModule {}
