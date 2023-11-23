import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './components/resources/resources.component';
import { VillageDetailsComponent } from './components/village-details/village-details.component';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';
import { FarmingComponent } from './components/farming/farming.component';
import { WastePlasticManagementComponent } from './components/waste-plastic-management/waste-plastic-management.component';
import { FamilyMemberDetailsComponent } from './components/family-member-details/family-member-details.component';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { FamilyProfileComponent } from './components/family-profile/family-profile.component';

const routes: Routes = [
  { path: '', component: VillageDetailsComponent },
  { path: 'family-Details', component: FamilyDetailsComponent },
  { path: 'farming', component: FarmingComponent },
  { path: 'productivity', component: ProductivityComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'waste-plastic-management', component: WastePlasticManagementComponent },
  { path: 'family-member-details', component: FamilyMemberDetailsComponent },
  { path: 'family-profile', component: FamilyProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVillagersRoutingModule { }
