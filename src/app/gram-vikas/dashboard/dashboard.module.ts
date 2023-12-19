import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DashboardSummaryComponent } from './dashboard-summary/components/dashboard-summary/dashboard-summary.component';
import { FormsModule } from '@angular/forms';
import { VillageComponent } from './components/village/village.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { FormToBeFilledComponent } from './components/form-to-be-filled/form-to-be-filled.component';
import { HomeComponent } from './components/home/home.component'
import { NotificationComponent } from './components/notification/notification.component'


@NgModule({
  declarations: [
    HomeComponent,
    AgentProfileComponent,
    VillageComponent,
    NotificationComponent,
    FooterComponent,
    DashboardSummaryComponent,
    FormToBeFilledComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule { }
