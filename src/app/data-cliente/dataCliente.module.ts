import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataClientelRoutes } from './dataCliente.routing';
import { DataClienteComponent } from './dataCliente.component';
import { DataClienteProviders } from './dataCliente.providers';

import {
  DxTextBoxModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxTextBoxModule,
    RouterModule.forChild(DataClientelRoutes)
  ],
  declarations: [DataClienteComponent],
  providers: [
    DataClienteProviders
  ]
})

export class DataClienteModule {}
