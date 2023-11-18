import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { VillageComponent } from './components/village/village.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DashboardSummaryComponent } from './dashboard-summary/components/dashboard-summary/dashboard-summary.component';
FooterComponent




@NgModule({
  declarations: [
    HomeComponent,
    AgentProfileComponent,
    VillageComponent,
    NotificationComponent,
    FooterComponent,
    DashboardSummaryComponent



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
