import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VillageComponent } from './components/village/village.component';
import { AddVillageComponent } from '../villages/components/add-village/add-village.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { FormToBeFilledComponent } from '../villages/components/form-to-be-filled/form-to-be-filled.component';
import { VillageFacilityComponent } from '../villages/components/village-facility/village-facility.component';
import { UploadVillagePhotoComponent } from '../villages/components/upload-village-photo/upload-village-photo.component';
import { VillageStatusComponent } from '../villages/components/village-status/village-status.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  {
    path: 'home',
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
{
  path:'upload-village-photo',
  component:UploadVillagePhotoComponent
  },
  {
    path:'notification',
    component:NotificationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
