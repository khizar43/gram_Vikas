import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';
import { VillagersDashboardComponent } from './components/villagers-dashboard/villagers-dashboard.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./add-villagers/add-villagers.module').then(m => m.AddVillagersModule),
  },
  {
    path: 'villagers-status', component: VillagersStatusComponent 
  },
  {
    path:'villagers-dashboard', component:VillagersDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagersRoutingModule { }
