import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferncesRoutingModule } from './prefernces-routing.module';
import { PreferncesComponent } from './prefernces.component';


@NgModule({
  declarations: [
    PreferncesComponent
  ],
  imports: [
    CommonModule,
    PreferncesRoutingModule
  ]
})
export class PreferncesModule { }
