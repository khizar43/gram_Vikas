import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VillageComponent } from './components/village/village.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormToBeFilledComponent } from './Components/form-to-be-filled/form-to-be-filled.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'village', component: VillageComponent,
  },
 
  {
     path: 'agent-profile', component: AgentProfileComponent 
},

  {
    path:'notification', component:NotificationComponent
  },
  {
    path:'form-to-be-filled', component:FormToBeFilledComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
