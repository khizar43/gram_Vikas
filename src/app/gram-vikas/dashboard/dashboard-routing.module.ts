import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageComponent } from './components/village/village.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'village',
    component: VillageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
