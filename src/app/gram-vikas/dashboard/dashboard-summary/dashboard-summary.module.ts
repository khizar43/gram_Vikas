import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSummaryRoutingModule } from './dashboard-summary-routing.module';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';


@NgModule({
  declarations: [
    DashboardSummaryComponent
  ],
  imports: [
    CommonModule,
    DashboardSummaryRoutingModule
  ]
})
export class DashboardSummaryModule { }
