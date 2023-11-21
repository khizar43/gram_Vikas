import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from '../../villages/components/add-village/add-village.component';
import { VillageComponent } from '../components/village/village.component';

const routes: Routes = [
  {
    path:'add-village', component:AddVillageComponent,
  },
  {
    path:'village', component:VillageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSummaryRoutingModule { }
