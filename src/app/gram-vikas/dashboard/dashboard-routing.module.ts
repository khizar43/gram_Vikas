import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageComponent } from './components/village/village.component';
import { HomeComponent } from './components/home/home.component';
import { AddVillageComponent } from '../villages/components/add-village/add-village.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { FormToBeFilledComponent } from '../villages/components/form-to-be-filled/form-to-be-filled.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'village',
    component: VillageComponent,
  },
  {
    path:'add-village',
    component:AddVillageComponent,
  },
  { path: 'agent-profile', component: AgentProfileComponent },
{
  path:'form-to-be-filled',
  component:FormToBeFilledComponent
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
