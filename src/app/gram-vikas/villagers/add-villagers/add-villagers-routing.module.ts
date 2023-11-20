import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';
import { FamilyMemberDetailsComponent } from './components/family-member-details/family-member-details.component';
import { FarmingComponent } from './components/farming/farming.component';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { VillageDetailsComponent } from './components/village-details/village-details.component';
import { WastePlasticManagementComponent } from './components/waste-plastic-management/waste-plastic-management.component';

const routes: Routes = [

  {
    path: 'family-details', component: FamilyDetailsComponent
  },
  {
    path: 'member', component: FamilyMemberDetailsComponent
  },
  {
    path: 'farming', component: FarmingComponent
  },
  {
    path: 'productivity', component: ProductivityComponent
  },
  {
    path: '', component: VillageDetailsComponent
  },
  {
    path: 'waste-plastic management', component: WastePlasticManagementComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVillagersRoutingModule { }
