import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';
import { VillageDashboardComponent } from '../villages/components/village-dashboard/village-dashboard.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./add-villagers/add-villagers.module').then(m => m.AddVillagersModule),
  },
  {
    path: 'villagers-status', component: VillagersStatusComponent 
  },
  {
    path:'villagers-dashboard', component:VillageDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagersRoutingModule { }
