import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagersRoutingModule } from './villagers-routing.module';
import { VillagersDashboardComponent } from './components/villagers-dashboard/villagers-dashboard.component';
import { UpdateVillagersComponent } from './components/update-villagers/update-villagers.component';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';
import { FormToBeFilledComponent } from './components/form-to-be-filled/form-to-be-filled.component';


@NgModule({
  declarations: [
    VillagersDashboardComponent,
    UpdateVillagersComponent,
    VillagersStatusComponent,
    FormToBeFilledComponent
  ],
  imports: [
    CommonModule,
    VillagersRoutingModule
  ]
})
export class VillagersModule { }
