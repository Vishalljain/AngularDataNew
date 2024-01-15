import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferncesComponent } from './prefernces.component';

const routes: Routes = [{ path: '', component: PreferncesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferncesRoutingModule { }
