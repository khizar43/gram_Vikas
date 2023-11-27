import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagersRoutingModule } from './villagers-routing.module';
import { VillagersDashboardComponent } from './components/villagers-dashboard/villagers-dashboard.component';
import { UpdateVillagersComponent } from './components/update-villagers/update-villagers.component';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';


@NgModule({
  declarations: [
    VillagersDashboardComponent,
    UpdateVillagersComponent,
    VillagersStatusComponent,
  ],
  imports: [
    CommonModule,
    VillagersRoutingModule
  ]
})
export class VillagersModule { }
