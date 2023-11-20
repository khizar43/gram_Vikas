import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { HomeComponent } from '../dashboard/components/home/home.component';
import { FormToBeFilledComponent } from './components/form-to-be-filled/form-to-be-filled.component';

const routes: Routes = [
  
    {
      path: '',
      component: HomeComponent
    },
    {
    path: 'add-village',
    component:AddVillageComponent,
  },
  {
    path: 'form-to-be-filled',
    component:FormToBeFilledComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
