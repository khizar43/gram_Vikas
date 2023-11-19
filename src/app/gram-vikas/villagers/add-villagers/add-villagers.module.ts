import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVillagersRoutingModule } from './add-villagers-routing.module';
import { VillageDetailsComponent } from './components/village-details/village-details.component';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';
import { FarmingComponent } from './components/farming/farming.component';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { WastePlasticManagementComponent } from './components/waste-plastic-management/waste-plastic-management.component';
import { FamilyMemberDetailsComponent } from './components/family-member-details/family-member-details.component';


@NgModule({
  declarations: [
    VillageDetailsComponent,
    FamilyDetailsComponent,
    FarmingComponent,
    ProductivityComponent,
    ResourcesComponent,
    WastePlasticManagementComponent,
    FamilyMemberDetailsComponent
  ],
  imports: [
    CommonModule,
    AddVillagersRoutingModule
  ]
})
export class AddVillagersModule { }
