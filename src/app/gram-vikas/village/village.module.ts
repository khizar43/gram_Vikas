import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRoutingModule } from './village-routing.module';
import { VillageProfileComponent } from './components/village-profile/village-profile.component';
import { FormStatusVillageComponent } from './components/form-status-village/form-status-village.component';


@NgModule({
  declarations: [
    VillageProfileComponent,
    FormStatusVillageComponent
  ],
  imports: [
    CommonModule,
    VillageRoutingModule
  ]
})
export class VillageModule { }
