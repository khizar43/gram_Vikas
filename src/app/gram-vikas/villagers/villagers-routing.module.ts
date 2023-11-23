import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./add-villagers/add-villagers.module').then(m => m.AddVillagersModule),
  },
  {
    path: 'villagers-status', component: VillagersStatusComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagersRoutingModule { }
