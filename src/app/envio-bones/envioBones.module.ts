import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EnvioBoneslRoutes } from './envioBones.routing';
import { BonesComponent } from './envioBones.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnvioBoneslRoutes)
  ],
  declarations: [BonesComponent]
})

export class EnvioBonesModule {}
