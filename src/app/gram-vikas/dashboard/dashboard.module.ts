import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { VillageComponent } from './Components/village/village.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DashboardSummaryComponent } from './dashboard-summary/components/dashboard-summary/dashboard-summary.component';
import { FormsModule } from '@angular/forms';
import { FormToBeFilledComponent } from './Components/form-to-be-filled/form-to-be-filled.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    AgentProfileComponent,
    VillageComponent,
    NotificationComponent,
    FooterComponent,
    DashboardSummaryComponent,
    FormToBeFilledComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
  
})
export class DashboardModule { }
