import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataPrecioRoutes } from './dataPrecio.routing';
import { dataPrecioComponent } from './dataPrecio.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataPrecioRoutes)
  ],
  declarations: [dataPrecioComponent]
})

export class DataPrecioModule {}
