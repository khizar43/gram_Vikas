import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagesRoutingModule } from './villages-routing.module';
import { VillageDashboardComponent } from './components/village-dashboard/village-dashboard.component';
import { AddVillageComponent } from './components/add-village/add-village.component';
import { UpdateVillageComponent } from './components/update-village/update-village.component';
import { VillageStatusComponent } from './components/village-status/village-status.component';
import { FormToBeFilledComponent } from './components/form-to-be-filled/form-to-be-filled.component';
import { VillageFacilityComponent } from './components/village-facility/village-facility.component';
import { UploadVillagePhotoComponent } from './components/upload-village-photo/upload-village-photo.component';


@NgModule({
  declarations: [
    VillageDashboardComponent,
    AddVillageComponent,
    UpdateVillageComponent,
    VillageStatusComponent,
    FormToBeFilledComponent,
    VillageFacilityComponent,
    UploadVillagePhotoComponent
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule
  ]
})
export class VillagesModule { }
