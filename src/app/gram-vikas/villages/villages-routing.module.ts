import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { HomeComponent } from '../dashboard/components/home/home.component';

const routes: Routes = [
  
    {
      path: '',
      component: HomeComponent
    },
    {
    path: 'add-village',
    component:AddVillageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
