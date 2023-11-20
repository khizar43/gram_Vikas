import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagersModule } from './gram-vikas/villagers/villagers.module';

const routes: Routes = [


  
  {
    path: '',
    loadChildren: () =>
      import('./gram-vikas/gram-vikas.module').then((m) => m.GramVikasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
