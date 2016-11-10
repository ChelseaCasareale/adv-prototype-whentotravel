import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';

import { SearchFormModule } from '../search-form/search-form.module';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [ LandingComponent ],
  imports: [
    CommonModule,
    SearchFormModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [ LandingComponent ]
})
export class LandingModule { }
