import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';
import { VillageStatusComponent } from './components/village-status/village-status.component';

const routes: Routes = [
  {
    path: 'villages',
    loadChildren: () => import('../villages/villages.module').then(m => m.VillagesModule),
  },
  {
    path: 'profile',
    component: VillageDashboardComponent,
  },
  {
    path: 'add-village',
    component: AddVillageComponent,
  },
  {
    path: 'villages-status', component:VillageStatusComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
