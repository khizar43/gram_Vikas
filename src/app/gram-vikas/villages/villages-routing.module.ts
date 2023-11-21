import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';
import { FormToBeFilledComponent } from './components/form-to-be-filled/form-to-be-filled.component';

const routes: Routes = [
  {
    path: 'villages',
    loadChildren: () => import('../villages/villages.module').then(m => m.VillagesModule),
  },

  {
    path: 'add-village',
    component: AddVillageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
