import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagesRoutingModule } from './villages-routing.module';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { UpdateVillageComponent } from './components/update-village/update-village.component';
import { VillageStatusComponent } from './components/village-status/village-status.component';
import { VillageFacilityComponent } from './components/village-facility/village-facility.component';
import { UploadVillagePhotoComponent } from './components/upload-village-photo/upload-village-photo.component';
import { VillageDashboardFooterComponent } from './components/village-dashboard-footer/village-dashboard-footer.component';


@NgModule({
  declarations: [
    VillageDashboardComponent,
    AddVillageComponent,
    UpdateVillageComponent,
    VillageStatusComponent,
    VillageFacilityComponent,
    UploadVillagePhotoComponent,
    VillageDashboardFooterComponent
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule
  ]
})
export class VillagesModule { }
