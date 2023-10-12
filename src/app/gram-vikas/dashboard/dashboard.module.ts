import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { VillageComponent } from './Components/village/village.component';
import { NotificationComponent } from './Components/notification/notification.component';





@NgModule({
  declarations: [
    HomeComponent,
    AgentProfileComponent,
    VillageComponent,
    NotificationComponent,



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
