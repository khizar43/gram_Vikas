import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageStatusComponent } from './components/village-status/village-status.component';

const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
