import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageComponent } from './Components/village/village.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { FormToBeFilledComponent } from './Components/form-to-be-filled/form-to-be-filled.component';
import { HomeComponent } from './Components/home/home.component';
import { NotificationComponent } from './Components/notification/notification.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'village', component: VillageComponent,
  },
  {
    path: 'agent-profile', component: AgentProfileComponent
  },
  {
    path: 'notification', component: NotificationComponent
  },
  {
    path: 'form-to-be-filled', component: FormToBeFilledComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
