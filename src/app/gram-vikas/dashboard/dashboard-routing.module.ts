import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VillageComponent } from './components/village/village.component';
import { AddVillageComponent } from '../villages/components/add-village/add-village.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { FormToBeFilledComponent } from '../villages/components/form-to-be-filled/form-to-be-filled.component';
import { VillageFacilityComponent } from '../villages/components/village-facility/village-facility.component';

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
  path:'village-facility',
  component:VillageFacilityComponent
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
