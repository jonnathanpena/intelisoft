import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataPrecioRoutes } from './dataPrecio.routing';
import { DataPrecioComponent } from './dataPrecio.component';
import { DataPrecioProviders } from './dataPrecio.providers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataPrecioRoutes)
  ],
  declarations: [DataPrecioComponent],
  providers: [
    DataPrecioProviders
  ]
})

export class DataPrecioModule {}
