import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagersRoutingModule } from './villagers-routing.module';
import { VillagersDashboardComponent } from './components/villagers-dashboard/villagers-dashboard.component';
import { UpdateVillagersComponent } from './components/update-villagers/update-villagers.component';
import { VillagersStatusComponent } from './components/villagers-status/villagers-status.component';
import { VillagersDashboardFooterComponent } from './components/villagers-dashboard-footer/villagers-dashboard-footer.component';


@NgModule({
  declarations: [
    VillagersDashboardComponent,
    UpdateVillagersComponent,
    VillagersStatusComponent,
    VillagersDashboardFooterComponent,
  ],
  imports: [
    CommonModule,
    VillagersRoutingModule
  ]
})
export class VillagersModule { }
