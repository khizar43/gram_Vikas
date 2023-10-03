import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'village',
  loadChildren:()=>import('./village/village.module').then(m=>m.VillageModule), 
},
{
  path:'dashboard',
loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule), 
},
{
  path:'family',
loadChildren:()=>import('./family/family.module').then(m=>m.FamilyModule),
},
{
  path:'',
loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule),
},
{
  path:'shared',
loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramVikasRoutingModule { }
