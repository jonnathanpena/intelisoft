import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardProviders } from './dashboard.providers';
import {
  DxSelectBoxModule,
  DxDateBoxModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxChartsModule,
    DxSelectBoxModule,
    DxDateBoxModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardProviders]
})

export class DashboardModule {}
