import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { AddVillageComponent } from '../village/components/add-village/add-village.component';
import { AddFamilyComponent } from './components/add-family/add-family.component';
import { FamilyProfileComponent } from './components/family-profile/family-profile.component';
import { FormStatusComponent } from './components/form-status/form-status.component';


@NgModule({
  declarations: [
    AddVillageComponent,
    AddFamilyComponent,
    FamilyProfileComponent,
    FormStatusComponent
  ],
  imports: [
    CommonModule,
    FamilyRoutingModule
  ]
})
export class FamilyModule { }
