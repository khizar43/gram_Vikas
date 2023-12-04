import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';
import { VillageStatusComponent } from './components/village-status/village-status.component';
import { UploadVillagePhotoComponent } from './components/upload-village-photo/upload-village-photo.component';
import { VillageFacilityComponent } from './components/village-facility/village-facility.component';

const routes: Routes = [
  {
    path: 'villages',
    loadChildren: () => import('../villages/villages.module').then(m => m.VillagesModule),
  },
  {
    path: 'profile', component: VillageDashboardComponent,
  },
  {
    path: 'add-village', component: AddVillageComponent,
  },
  {
    path: 'villages-status', component:VillageStatusComponent,
  },
  {
    path:'villages-dashboard', component:VillageDashboardComponent,
  },
  {
    path:'upload-village-photo', component:UploadVillagePhotoComponent,
  },
{
  path:'village-facility',component:VillageFacilityComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
