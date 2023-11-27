import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { VillageComponent } from './components/village/village.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DashboardSummaryComponent } from './dashboard-summary/components/dashboard-summary/dashboard-summary.component';
import { FormsModule } from '@angular/forms';
import { FormToBeFilledComponent } from './Components/form-to-be-filled/form-to-be-filled.component';
FooterComponent;

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
