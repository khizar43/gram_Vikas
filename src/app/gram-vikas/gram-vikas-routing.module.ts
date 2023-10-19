import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'villages',
  loadChildren:()=>import('./villages/villages.module').then(m=>m.VillagesModule), 
},
{
  path:'dashboard',
loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule), 
},

{
  path:'',
loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule),
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramVikasRoutingModule { }
