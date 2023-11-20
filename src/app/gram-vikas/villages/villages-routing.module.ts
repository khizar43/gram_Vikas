import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { HomeComponent } from '../dashboard/components/home/home.component';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';

const routes: Routes = [
  {
    path:'villages',
    loadChildren:()=>import('../villages/villages.module').then(m=>m.VillagesModule), 
  },
    {
      path: '',
      component: HomeComponent
    },
    {
    path: 'add-village',
    component:AddVillageComponent,
  },
  {
    path: 'profile',
    component:VillageDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
