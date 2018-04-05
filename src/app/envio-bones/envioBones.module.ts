import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EnvioBoneslRoutes } from './envioBones.routing';
import { BonesComponent } from './envioBones.component';
import { EnvioBonesProviders } from './envioBones.providers';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnvioBoneslRoutes),
    NgbModule
  ],
  declarations: [BonesComponent],
  providers: [
    EnvioBonesProviders
  ]
})

export class EnvioBonesModule {}
